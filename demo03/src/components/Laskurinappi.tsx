import { useState } from "react";

interface Props {
    children: string;
    paivitaSumma: () => void;
}

export default function Laskurinappi({ children, paivitaSumma }: Props) {
    const [laskuri, setLaskuri] = useState<number>(0);

    return (
        <button
            style={{
                width: "300px",
                padding: "20px",
                marginBottom: "5px",
                display: "block"
            }}
            onClick={() => {
                paivitaSumma();
                setLaskuri(laskuri + 1);
            }}
        >
            {children} ({laskuri})
        </button>
    );
}