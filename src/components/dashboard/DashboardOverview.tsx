
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";

// Mock data for charts
const yieldData = [
  { name: "Rice", current: 72, previous: 65 },
  { name: "Wheat", current: 58, previous: 52 },
  { name: "Corn", current: 81, previous: 75 },
  { name: "Soybeans", current: 62, previous: 59 },
  { name: "Potatoes", current: 85, previous: 78 },
];

const weatherData = [
  { day: "Mon", temperature: 22, humidity: 65, rainfall: 12 },
  { day: "Tue", temperature: 24, humidity: 60, rainfall: 5 },
  { day: "Wed", temperature: 25, humidity: 58, rainfall: 0 },
  { day: "Thu", temperature: 23, humidity: 70, rainfall: 8 },
  { day: "Fri", temperature: 21, humidity: 75, rainfall: 15 },
  { day: "Sat", temperature: 20, humidity: 80, rainfall: 20 },
  { day: "Sun", temperature: 22, humidity: 72, rainfall: 10 },
];

export default function DashboardOverview() {
  // Get user name from localStorage
  const userName = JSON.parse(localStorage.getItem('user') || '{"name": "User"}').name;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, {userName}!</h1>
        <div className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="agro-card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Soil Health Score</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
              <path d="M22 11v1a10 10 0 1 1-9-10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9" y1="9" y2="9" />
              <line x1="15" x2="15" y1="9" y2="9" />
              <path d="M16 5v3" />
              <path d="M21 16v-3" />
              <path d="M22 12h-3" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+5% from last measurement</p>
          </CardContent>
        </Card>
        
        <Card className="agro-card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recommended Crops</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
              <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">Rice, Wheat, Maize</p>
          </CardContent>
        </Card>
        
        <Card className="agro-card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expected Yield</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
              <path d="M3 22V8" />
              <path d="M21 22V8" />
              <path d="M12 2v20" />
              <path d="M3 12h18" />
              <path d="M3 2h18v6H3z" />
              <circle cx="12" cy="17" r="3" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2 t/ha</div>
            <p className="text-xs text-muted-foreground mt-2">+8% from last season</p>
          </CardContent>
        </Card>
        
        <Card className="agro-card-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fertilizer Needed</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
              <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Z" />
              <path d="M6 3v10a2 2 0 0 0 2 2h12" />
              <path d="M5 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
              <path d="M22 13H10" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">140 kg</div>
            <p className="text-xs text-muted-foreground mt-2">NPK: 60-40-40 kg/ha</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="agro-card-shadow">
          <CardHeader>
            <CardTitle>Yield Comparison</CardTitle>
            <CardDescription>Current vs Previous Season</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yieldData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="current" name="Current Season" fill="#2E7D32" />
                <Bar dataKey="previous" name="Previous Season" fill="#81C784" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Shows estimated yield based on current conditions
          </CardFooter>
        </Card>

        <Card className="agro-card-shadow">
          <CardHeader>
            <CardTitle>Weather Conditions</CardTitle>
            <CardDescription>7-day forecast</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weatherData}>
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temperature" name="Temperature (°C)" stroke="#FFA000" />
                <Line yAxisId="left" type="monotone" dataKey="humidity" name="Humidity (%)" stroke="#2E7D32" />
                <Line yAxisId="right" type="monotone" dataKey="rainfall" name="Rainfall (mm)" stroke="#2196F3" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Updated every 3 hours from local weather station
          </CardFooter>
        </Card>
      </div>

      {/* Recent activity */}
      <Card className="agro-card-shadow">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest updates and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-agro-light p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Crop Recommendation Updated</h4>
                <p className="text-sm text-muted-foreground">New recommended crops based on latest soil data</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-agro-light p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                  <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Z" />
                  <path d="M6 3v10a2 2 0 0 0 2 2h12" />
                  <path d="M5 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Fertilizer Schedule Updated</h4>
                <p className="text-sm text-muted-foreground">Optimized fertilizer application schedule created</p>
                <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-agro-light p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-primary">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Soil Analysis Complete</h4>
                <p className="text-sm text-muted-foreground">Soil health report is now available</p>
                <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
