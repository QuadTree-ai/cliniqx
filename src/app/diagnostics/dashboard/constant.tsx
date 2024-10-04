export const CHART_COLORS = {
    primary: '#3b82f6',
    secondary: '#10b981',
    tertiary: '#f59e0b',
    quaternary: '#ef4444',
    quinary: '#8b5cf6',
  };
  
  export const CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };
  
  export const TABLE_HEADERS = {
    recentTests: ['Test Name', 'Date', 'Status'],
    patientInfo: ['Name', 'ID', 'Age', 'Gender', 'Blood Type'],
  };
  
  export const SEVERITY_COLORS = {
    low: 'green',
    moderate: 'yellow',
    high: 'red',
  };
  
  export const DATE_FORMAT = 'YYYY-MM-DD';
  
  export const MAX_RECENT_TESTS = 5;
  
  export const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  
  export const CLINIQX_CARD_REGEX = /^[A-Z]{2}[0-9]{6}$/;