import { TrackPlayerProvider } from "./TrackPlayerContext";


export const AppProviders = ({ children } : {
    children: React.ReactNode;
}) => {
    return (
        <TrackPlayerProvider>
            {children}
        </TrackPlayerProvider>
    );
}