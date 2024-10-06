import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </AuthProvider>
    );
};

export default AppProviders;