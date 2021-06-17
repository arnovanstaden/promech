import ClassNames from "classnames";

import Head from "../../Head/Head";

interface IProps {
    children: React.ReactNode;
    head: {
        title: string;
        description: string;
        canonical: string;
        robots?: boolean;
    },
    className: string
}

const Page = (props: IProps) => {
    const pageStyle = {
        minHeight: "75vh"
    };

    return (
        <main className={props.className} style={pageStyle}>
            <Head
                {...props.head}
            />
            {props.children}
        </main>
    )
}

export default Page
