interface Props {
  children: string;
  taso?: "pieni" | "keski" | "iso";
}

function Otsikko({ children, taso }: Props) {

  switch (taso) {
    case "pieni": return <h3
                          style={{
                            fontSize: "18px"
                          }}
                        >{children}</h3>
    case "keski": return <h2
                          style={{
                            fontSize: "24px"
                          }}
                        >{children}</h2>
    case "iso": return <h1
                          style={{
                            fontSize: "32px"
                          }}
                        >
                          {children}
                        </h1>
    default: return <h2>{children}</h2>
  }

}

export default Otsikko;
