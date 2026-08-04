interface IProps {
    children: React.ReactNode;
    className: string
}

const Page = (props: IProps) => {
    const pageStyle = {
        minHeight: "75vh"
    };

    return (
        <main className={props.className} style={pageStyle}>
            {props.children}
        </main>
    )
}

export default Page
