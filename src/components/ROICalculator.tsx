import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  TrendingUp,
  PieChart,
  Download,
  IndianRupee,
  Share2,
} from "lucide-react";

interface CalculationResults {
  monthlyPayment: number;
  totalInterest: number;
  monthlyRent: number;
  annualRent: number;
  capRate: number;
  cashFlow: number;
  roi: number;
  breakEvenPoint: number;
  totalReturn: number;
}

const ROICalculator = () => {
  // ✅ keep as string for inputs
  const [purchasePrice, setPurchasePrice] = useState<string>("1000000");
  const [downPayment, setDownPayment] = useState<string>("200000");
  const [interestRate, setInterestRate] = useState<string>("6.5");
  const [loanTerm, setLoanTerm] = useState<string>("25");
  const [monthlyRent, setMonthlyRent] = useState<string>("8500");
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>("2500");
  const [vacancyRate, setVacancyRate] = useState<string>("5");
  const [propertyTaxRate, setPropertyTaxRate] = useState<string>("1.2");

  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateROI = () => {
    // ✅ safely parse numbers
    const purchasePriceNum = Number(purchasePrice) || 0;
    const downPaymentNum = Number(downPayment) || 0;
    const interestRateNum = Number(interestRate) || 0;
    const loanTermNum = Number(loanTerm) || 0;
    const monthlyRentNum = Number(monthlyRent) || 0;
    const monthlyExpensesNum = Number(monthlyExpenses) || 0;
    const vacancyRateNum = Number(vacancyRate) || 0;
    const propertyTaxRateNum = Number(propertyTaxRate) || 0;

    const loanAmount = purchasePriceNum - downPaymentNum;
    const monthlyInterestRate = interestRateNum / 100 / 12;
    const numberOfPayments = loanTermNum * 12;

    // Monthly payment
    const monthlyPayment =
      loanAmount > 0 && monthlyInterestRate > 0
        ? (loanAmount *
            (monthlyInterestRate *
              Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
          (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
        : 0;

    const totalInterest = monthlyPayment * numberOfPayments - loanAmount;

    // Rental income
    const effectiveMonthlyRent = monthlyRentNum * (1 - vacancyRateNum / 100);
    const annualRent = effectiveMonthlyRent * 12;

    // Taxes & expenses
    const monthlyPropertyTax =
      (purchasePriceNum * propertyTaxRateNum) / 100 / 12;
    const totalMonthlyExpenses =
      monthlyExpensesNum + monthlyPropertyTax + monthlyPayment;

    // Cash flow
    const monthlyCashFlow = effectiveMonthlyRent - totalMonthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;

    // NOI & cap rate
    const noi = annualRent - (monthlyExpensesNum + monthlyPropertyTax) * 12;
    const capRate = purchasePriceNum ? (noi / purchasePriceNum) * 100 : 0;

    // ROI
    const cashInvested = downPaymentNum + purchasePriceNum * 0.05;
    const roi = cashInvested ? (annualCashFlow / cashInvested) * 100 : 0;

    // Break-even
    const breakEvenPoint =
      monthlyExpensesNum + monthlyPayment + monthlyPropertyTax;

    // 5-year projection
    const totalReturn = annualCashFlow * 5;

    setResults({
      monthlyPayment,
      totalInterest,
      monthlyRent: effectiveMonthlyRent,
      annualRent,
      capRate,
      cashFlow: monthlyCashFlow,
      roi,
      breakEvenPoint,
      totalReturn,
    });
  };

  useEffect(() => {
    calculateROI();
  }, [
    purchasePrice,
    downPayment,
    interestRate,
    loanTerm,
    monthlyRent,
    monthlyExpenses,
    vacancyRate,
    propertyTaxRate,
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-3 rounded-full gradient-secondary">
            <Calculator className="w-6 h-6 text-secondary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">ROI Calculator</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Analyze the investment potential of commercial properties with our
          comprehensive ROI calculator
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-1">
          <Card className="shadow-card border-border/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <IndianRupee className="w-5 h-5 text-primary" />
                <span>Property Details</span>
              </CardTitle>
              <CardDescription>
                Enter the property and financing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="property" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="property">Property</TabsTrigger>
                  <TabsTrigger value="financing">Financing</TabsTrigger>
                </TabsList>

                {/* Property Tab */}
                <TabsContent value="property" className="space-y-4">
                  <div>
                    <Label htmlFor="purchasePrice">Purchase Price</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyRent">Monthly Rent</Label>
                    <Input
                      id="monthlyRent"
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                    <Input
                      id="monthlyExpenses"
                      type="number"
                      value={monthlyExpenses}
                      onChange={(e) => setMonthlyExpenses(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="vacancyRate">Vacancy Rate (%)</Label>
                    <Input
                      id="vacancyRate"
                      type="number"
                      step="0.1"
                      value={vacancyRate}
                      onChange={(e) => setVacancyRate(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="propertyTax">Property Tax Rate (%)</Label>
                    <Input
                      id="propertyTax"
                      type="number"
                      step="0.1"
                      value={propertyTaxRate}
                      onChange={(e) => setPropertyTaxRate(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>

                {/* Financing Tab */}
                <TabsContent value="financing" className="space-y-4">
                  <div>
                    <Label htmlFor="downPayment">Down Payment</Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex space-x-3 pt-4">
                <Button variant="luxury" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2">
          {results && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="shadow-card border-border/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Monthly Cash Flow
                      </CardTitle>
                      <TrendingUp
                        className={`w-4 h-4 ${
                          results.cashFlow >= 0
                            ? "text-success"
                            : "text-destructive"
                        }`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`text-2xl font-bold ${
                        results.cashFlow >= 0
                          ? "text-success"
                          : "text-destructive"
                      }`}
                    >
                      {formatCurrency(results.cashFlow)}
                    </div>
                    <Badge
                      variant={
                        results.cashFlow >= 0 ? "default" : "destructive"
                      }
                      className="mt-2"
                    >
                      {results.cashFlow >= 0 ? "Positive" : "Negative"} Flow
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-border/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Cap Rate
                      </CardTitle>
                      <PieChart className="w-4 h-4 text-secondary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-secondary">
                      {formatPercentage(results.capRate)}
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {results.capRate >= 6
                        ? "Strong"
                        : results.capRate >= 4
                        ? "Fair"
                        : "Weak"}
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-border/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Cash-on-Cash ROI
                      </CardTitle>
                      <TrendingUp
                        className={`w-4 h-4 ${
                          results.roi >= 0 ? "text-success" : "text-destructive"
                        }`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`text-2xl font-bold ${
                        results.roi >= 0 ? "text-success" : "text-destructive"
                      }`}
                    >
                      {formatPercentage(results.roi)}
                    </div>
                    <Badge
                      variant={results.roi >= 8 ? "default" : "outline"}
                      className="mt-2"
                    >
                      {results.roi >= 8
                        ? "Excellent"
                        : results.roi >= 4
                        ? "Good"
                        : "Poor"}
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Breakdown */}
              <Card className="shadow-card border-border/20">
                <CardHeader>
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>
                    Detailed breakdown of your investment calculations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">
                        Monthly Breakdown
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Effective Rent:
                          </span>
                          <span className="font-medium text-success">
                            {formatCurrency(results.monthlyRent)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Mortgage Payment:
                          </span>
                          <span className="font-medium text-destructive">
                            -{formatCurrency(results.monthlyPayment)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Operating Expenses:
                          </span>
                          <span className="font-medium text-destructive">
                            -{formatCurrency(Number(monthlyExpenses) || 0)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Property Taxes:
                          </span>
                          <span className="font-medium text-destructive">
                            -
                            {formatCurrency(
                              ((Number(purchasePrice) || 0) *
                                (Number(propertyTaxRate) || 0)) /
                                100 /
                                12
                            )}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border/20">
                          <div className="flex justify-between">
                            <span className="font-semibold text-foreground">
                              Net Cash Flow:
                            </span>
                            <span
                              className={`font-bold ${
                                results.cashFlow >= 0
                                  ? "text-success"
                                  : "text-destructive"
                              }`}
                            >
                              {formatCurrency(results.cashFlow)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">
                        Investment Summary
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Total Investment:
                          </span>
                          <span className="font-medium">
                            {formatCurrency(
                              (Number(downPayment) || 0) +
                                (Number(purchasePrice) || 0) * 0.05
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Annual Income:
                          </span>
                          <span className="font-medium text-success">
                            {formatCurrency(results.annualRent)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Annual Cash Flow:
                          </span>
                          <span
                            className={`font-medium ${
                              results.cashFlow * 12 >= 0
                                ? "text-success"
                                : "text-destructive"
                            }`}
                          >
                            {formatCurrency(results.cashFlow * 12)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Break-even Rent:
                          </span>
                          <span className="font-medium">
                            {formatCurrency(results.breakEvenPoint)}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border/20">
                          <div className="flex justify-between">
                            <span className="font-semibold text-foreground">
                              5-Year Projection:
                            </span>
                            <span className="font-bold text-secondary">
                              {formatCurrency(results.totalReturn)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
