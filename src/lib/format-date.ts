
export default function getFormattedDate(dateString: string): string {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(date);
}