import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Activity, BarChart3, Calendar, HelpCircle, ArrowUp, ChevronRight, ChevronLeft } from "lucide-react";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DayPicker, NavProps} from "react-day-picker";
import { Calendar as CalendarComponent } from "@/app/components/ui/calendar";

export default function AnalyticsDashboard() {
  const [leadsChartType, setLeadsChartType] = useState("Line Chart");
  const [interactionsChartType, setInteractionsChartType] = useState("Line Chart");
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const [dateRange, setDateRange] = useState<{
    from: Date;
    to: Date | undefined;
  }>({
    from: isClient ? new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) : new Date(2024, 0, 1), // Default fallback date
    to: isClient ? new Date() : new Date(2024, 0, 8),
  });
  
  // Update date range when client-side hydration completes
  useEffect(() => {
    if (isClient) {
      setDateRange({
        from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        to: new Date(),
      });
    }
  }, [isClient]);

  function CustomNav({ onPreviousClick, onNextClick, previousMonth, nextMonth }: NavProps) {
  // Calculate current month from previousMonth and nextMonth
  const currentMonth = previousMonth ? new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 1) : new Date();
  
  return (
    <div id="analytics" className="flex items-center justify-between px-2">
      <button
        onClick={(e) => onPreviousClick?.(e)}
        className="p-1 rounded hover:bg-white/10"
      >
        <ChevronLeft className="h-4 w-4 text-white" />
      </button>
      <div className="text-white text-sm font-medium">
        {format(currentMonth, "MMMM yyyy")}
      </div>
      <button
        onClick={(e) => onNextClick?.(e)}
        className="p-1 rounded hover:bg-white/10"
      >
        <ChevronRight className="h-4 w-4 text-white" />
      </button>
    </div>
  );
 }


  const renderLeadsChart = () => {
    if (leadsChartType === "Bar Chart") {
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Bar Chart */}
          <rect x="40" y="140" width="40" height="40" fill="#91C499" opacity="0.8" />
          <rect x="100" y="120" width="40" height="60" fill="#91C499" opacity="0.8" />
          <rect x="160" y="100" width="40" height="80" fill="#91C499" opacity="0.8" />
          <rect x="220" y="80" width="40" height="100" fill="#91C499" opacity="0.8" />
          <rect x="280" y="60" width="40" height="120" fill="#91C499" opacity="0.8" />
          <rect x="340" y="40" width="40" height="140" fill="#91C499" opacity="0.8" />
        </svg>
      );
    }

    // Line Chart (default)
    return (
      <svg className="w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="leadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#91C499" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#91C499" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 20 160 Q 80 140 120 120 T 200 100 T 280 80 T 360 60"
          stroke="#91C499"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 20 160 Q 80 140 120 120 T 200 100 T 280 80 T 360 60 L 360 180 L 20 180 Z"
          fill="url(#leadGradient)"
        />
        {/* Data points */}
        <circle cx="20" cy="160" r="4" fill="#91C499" />
        <circle cx="120" cy="120" r="4" fill="#91C499" />
        <circle cx="200" cy="100" r="4" fill="#91C499" />
        <circle cx="280" cy="80" r="4" fill="#91C499" />
        <circle cx="360" cy="60" r="4" fill="#91C499" />
      </svg>
    );
  };

  const renderInteractionsChart = () => {
    if (interactionsChartType === "Bar Chart") {
      return (
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Bar Chart */}
          <rect x="40" y="120" width="40" height="60" fill="#E1A940" opacity="0.8" />
          <rect x="100" y="110" width="40" height="70" fill="#E1A940" opacity="0.8" />
          <rect x="160" y="90" width="40" height="90" fill="#E1A940" opacity="0.8" />
          <rect x="220" y="70" width="40" height="110" fill="#E1A940" opacity="0.8" />
          <rect x="280" y="50" width="40" height="130" fill="#E1A940" opacity="0.8" />
          <rect x="340" y="30" width="40" height="150" fill="#E1A940" opacity="0.8" />
        </svg>
      );
    }

    // Line Chart (default)
    return (
      <svg className="w-full h-full" viewBox="0 0 400 200">
        <defs>
          <linearGradient id="interactionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E1A940" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E1A940" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 20 140 Q 80 130 120 110 T 200 90 T 280 70 T 360 50"
          stroke="#E1A940"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 20 140 Q 80 130 120 110 T 200 90 T 280 70 T 360 50 L 360 180 L 20 180 Z"
          fill="url(#interactionGradient)"
        />
        {/* Data points */}
        <circle cx="20" cy="140" r="4" fill="#E1A940" />
        <circle cx="120" cy="110" r="4" fill="#E1A940" />
        <circle cx="200" cy="90" r="4" fill="#E1A940" />
        <circle cx="280" cy="70" r="4" fill="#E1A940" />
        <circle cx="360" cy="50" r="4" fill="#E1A940" />
      </svg>
    );
  };

  return (
    <section id="analytics-demo" className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 md:mb-6 border border-[#1A6262]/30">
            <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-[#91C499]" />
            <span className="text-[#91C499] font-medium text-xs sm:text-sm md:text-base">Real-time Intelligence</span>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">Track Every Chat. Score Every Lead</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            SniperThink's live analytics dashboard shows performance metrics, conversion trends, and lead scoring — all in one place.
          </p>
        </div>

        <div className="relative">
          {/* Background Collage Images */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Agents Dashboard - Top Left */}
            <div className="absolute top-0 left-0 w-80 h-48 opacity-20 transform -rotate-6 scale-75">
              <img
                src="/images/agents-dashboard.png"
                alt="Agents Dashboard"
                className="w-full h-full object-cover rounded-xl border border-white/10"
              />
            </div>
            {/* Find User - Top Right */}
            <div className="absolute top-10 right-0 w-64 h-56 opacity-15 transform rotate-12 scale-75">
              <img
                src="/images/find-user.png"
                alt="Find User Interface"
                className="w-full h-full object-cover rounded-xl border border-white/10"
              />
            </div>
            {/* Call Log - Bottom Left */}
            <div className="absolute bottom-0 left-10 w-72 h-40 opacity-20 transform rotate-3 scale-75">
              <img
                src="/images/call-log.png"
                alt="Call Log"
                className="w-full h-full object-cover rounded-xl border border-white/10"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 right-20 w-48 h-32 opacity-10 transform -rotate-12 scale-50">
              <div className="w-full h-full bg-gradient-to-br from-[#1A6262]/30 to-[#91C499]/30 rounded-xl border border-white/10"></div>
            </div>
          </div>

          <div className="relative bg-black/40 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 xs:p-4 sm:p-6 md:p-8 border border-white/10">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white">SniperThink Analytics</h3>
                  <p className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-gray-400">Welcome Pravalika!</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-2 md:gap-3 w-full sm:w-auto">
                <Badge className="bg-green-900/50 text-green-300 px-1.5 xs:px-2 sm:px-2 md:px-3 py-0.5 xs:py-1 border border-green-700 text-[10px] xs:text-xs sm:text-xs md:text-sm">Live</Badge>
                <Badge className="bg-blue-900/50 text-blue-300 px-1.5 xs:px-2 sm:px-2 md:px-3 py-0.5 xs:py-1 border border-blue-700 text-[10px] xs:text-xs sm:text-xs md:text-sm">Real-time</Badge>
                <Button className="bg-[#1A6262] hover:bg-[#1A6262]/80 text-white px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 rounded-lg text-[10px] xs:text-xs sm:text-xs md:text-sm">
                  Export Summary
                </Button>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="sm:flex sm:items-center sm:space-x-3 sm:space-y-0 grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              {/* Date Picker - Full width on mobile, inline on desktop */}
              <div className="w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#91C499]/50 hover:text-[#91C499] transition-all duration-200 text-[10px] xs:text-xs sm:text-xs md:text-sm focus:ring-2 focus:ring-[#91C499] focus:border-[#91C499] flex items-center w-full py-2 xs:py-2.5 sm:py-2.5"
                    >
                      <Calendar className="w-3 h-3 xs:w-4 xs:h-4 mr-1.5 xs:mr-2 shrink-0" />
                      <span className="truncate max-w-[180px] text-left">
                        {dateRange?.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          "Select Date Range"
                        )}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#0F0F11] border-white/20 shadow-2xl backdrop-blur-xl" align="start">
                    <CalendarComponent
                      mode="range"
                      defaultMonth={dateRange?.from}
                      selected={dateRange}
                      onSelect={(range) => {
                        if (range?.from) {
                          setDateRange({ from: range.from, to: range.to || undefined });
                        }
                      }}
                      numberOfMonths={1}
                      components={{ Nav: CustomNav
                       }}
                      className="bg-[#0F0F11] text-white"
                      classNames={{
                        months: "flex flex-col", // Remove `sm:flex-row` if you're only using 1 month
                        caption: "text-transparent", // Make caption text transparent
                        caption_label: "text-transparent", // Make caption label transparent
                        table: "w-full border-collapse",
                        head_row: "flex justify-between px-2 text-sm text-[#91C499]",
                        row: "flex justify-between px-9 py-9",
                        cell: "w-8 h-8 flex items-center justify-center text-sm",
                        day: "hover:bg-white/10 rounded-md transition-all duration-150 py-3 px-3",
                        day_selected: "bg-[#91C499] text-black",
                        day_range_middle: "bg-[#91C499]/50 text-black",
                      }}
                      
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Grouped selects: grid on mobile, flex row on desktop */}
              <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 sm:flex sm:space-x-3 sm:w-full">
                {/** Type Select */}
                <select
                  className="bg-white/5 border border-white/20 rounded-md sm:rounded-lg px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 text-white text-[10px] xs:text-xs sm:text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#91C499] focus:border-[#91C499] appearance-none hover:bg-white/10 transition-all duration-200 w-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option className="bg-[#0F0F11] text-white">All Types</option>
                  <option className="bg-[#0F0F11] text-white">Chat</option>
                  <option className="bg-[#0F0F11] text-white">Call</option>
                </select>

                {/** Agent Select */}
                <select
                  className="bg-white/5 border border-white/20 rounded-md sm:rounded-lg px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 text-white text-[10px] xs:text-xs sm:text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#91C499] focus:border-[#91C499] appearance-none hover:bg-white/10 transition-all duration-200 w-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option className="bg-[#0F0F11] text-white">All Agents</option>
                  <option className="bg-[#0F0F11] text-white">Chatter box 3000</option>
                  <option className="bg-[#0F0F11] text-white">Voice Master Pro</option>
                </select>

                {/** Quality Select */}
                <select
                  className="bg-white/5 border border-white/20 rounded-md sm:rounded-lg px-2 xs:px-3 sm:px-3 md:px-4 py-1.5 xs:py-2 text-white text-[10px] xs:text-xs sm:text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#91C499] focus:border-[#91C499] appearance-none hover:bg-white/10 transition-all duration-200 w-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option className="bg-[#0F0F11] text-white">Lead Quality</option>
                  <option className="bg-[#0F0F11] text-white">Hot</option>
                  <option className="bg-[#0F0F11] text-white">Warm</option>
                  <option className="bg-[#0F0F11] text-white">Cold</option>
                </select>
              </div>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-300">Total Unique Leads</p>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">1738</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs md:text-sm">
                    <ArrowUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+8.2%</span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-300">Total Interactions</p>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">2456</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs md:text-sm">
                    <ArrowUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+12.5%</span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-300">Leads Converted</p>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">82</span>
                    <span className="text-sm md:text-lg text-gray-400">(4.7%)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs md:text-sm">
                    <ArrowUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+3.4%</span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-300">Avg. Conversations per Hour</p>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-[#91C499]">6.3</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs md:text-sm">
                    <ArrowUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+0.8%</span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-300">Avg. Time to Convert a Lead</p>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">1.8 days</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs md:text-sm">
                    <ArrowUp className="w-4 h-4 text-red-400 rotate-180" />
                    <span className="text-red-400">0.2%</span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-300">Avg. No. of Interactions to Convert</p>
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-white">4.6</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs md:text-sm">
                    <ArrowUp className="w-4 h-4 text-red-400 rotate-180" />
                    <span className="text-red-400">0.3%</span>
                    <span className="text-gray-400">vs last week</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Leads Over Time Chart */}
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base md:text-lg font-semibold text-white">Leads Over Time</h4>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </div>
                    <select
                      className="bg-white/5 border border-white/20 rounded-lg px-2 md:px-3 py-1 text-white text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#91C499] focus:border-[#91C499] appearance-none"
                      value={leadsChartType}
                      onChange={(e) => setLeadsChartType(e.target.value)}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option className="bg-[#0F0F11] text-white hover:bg-[#1A6262]">Line Chart</option>
                      <option className="bg-[#0F0F11] text-white hover:bg-[#1A6262]">Bar Chart</option>
                    </select>
                  </div>
                  <div className="h-40 md:h-64 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Simulated Chart */}
                      {renderLeadsChart()}
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Total Interactions Chart */}
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base md:text-lg font-semibold text-white">Total Interactions Over Time (Chat/Call)</h4>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </div>
                    <select
                      className="bg-white/5 border border-white/20 rounded-lg px-2 md:px-3 py-1 text-white text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#E1A940] focus:border-[#E1A940] appearance-none"
                      value={interactionsChartType}
                      onChange={(e) => setInteractionsChartType(e.target.value)}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option className="bg-[#0F0F11] text-white hover:bg-[#1A6262]">Line Chart</option>
                      <option className="bg-[#0F0F11] text-white hover:bg-[#1A6262]">Bar Chart</option>
                    </select>
                  </div>
                  <div className="h-40 md:h-64 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* Simulated Chart */}
                      {renderInteractionsChart()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 md:mt-8">
              <Card className="p-4 md:p-6 bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="pt-0">
                  <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">Recent Activity</h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10 gap-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1A6262] rounded-full flex items-center justify-center text-white font-semibold text-xs md:text-base">
                          JS
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm md:text-base">John Smith - Demo Booked</p>
                          <p className="text-xs md:text-sm text-gray-400">Call • 4:32 duration • Hot Lead</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <Badge className="bg-green-900/50 text-green-300 border-green-700 text-xs md:text-sm">Connected</Badge>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs md:text-sm">
                          <FileText className="w-4 h-4 mr-1" />
                          Transcript
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10 gap-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#91C499] rounded-full flex items-center justify-center text-white font-semibold text-xs md:text-base">
                          SJ
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm md:text-base">Sarah Johnson - Follow-up Scheduled</p>
                          <p className="text-xs md:text-sm text-gray-400">Call • 2:15 duration • Warm Lead</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <Badge className="bg-yellow-900/50 text-yellow-300 border-yellow-700 text-xs md:text-sm">Connected</Badge>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs md:text-sm">
                          <FileText className="w-4 h-4 mr-1" />
                          Transcript
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10 gap-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E1A940] rounded-full flex items-center justify-center text-white font-semibold text-xs md:text-base">
                          MC
                        </div>
                        <div>
                          <p className="font-medium text-white text-sm md:text-base">Mike Chen - Call Scheduled</p>
                          <p className="text-xs md:text-sm text-gray-400">Call • 3:45 duration • Cold Lead</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <Badge className="bg-red-900/50 text-red-300 border-red-700 text-xs md:text-sm">Connected</Badge>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white text-xs md:text-sm">
                          <FileText className="w-4 h-4 mr-1" />
                          Transcript
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
