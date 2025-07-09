export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; Verano inclusivo &reg; {year}</p>
        </footer>
    );
}