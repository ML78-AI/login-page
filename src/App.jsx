import Routage from "./routage/Routage";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./translations/locales";
import { messages } from "./translations/messages";
import { useState } from "react";
import Header from "./components/Header";

function App() {
    const locale = LOCALES.FRENCH;
    const [currentLocale, setCurrentLocale] = useState(locale);
    const handleChange = (e) => {
        setCurrentLocale(e.target.value);
    };
    return (
        <>
            <Header currentLocale={currentLocale} handleChange={handleChange} />
            <IntlProvider
                locale={currentLocale}
                defaultLocale={LOCALES.FRENCH}
                messages={messages[currentLocale]}
            >
                <Routage />
            </IntlProvider>
        </>
    );
}

export default App;
