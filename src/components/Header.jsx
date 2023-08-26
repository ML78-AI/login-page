import { LOCALES } from "../translations/locales";

const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Français", code: LOCALES.FRENCH },
];

function Header({ currentLocale, handleChange }) {
    return (
        <div className="switcher">
            {/* Language switch dropdown here */}
            <select value={currentLocale} onChange={handleChange}>
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Header;
