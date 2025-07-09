export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; Playas del verano &reg; {year}</p>
        </footer>
    );
}