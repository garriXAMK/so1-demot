import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

interface Props {
    children: React.ReactNode[];
}

export default function Sivu({ children }: Props) {
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "auto",
                fontFamily: "Roboto"
            }}
        >
            {children}
        </div>
    );
}