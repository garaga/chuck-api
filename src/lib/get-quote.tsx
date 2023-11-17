/**
 *  Retrieve JSON Data (Quote string) from API
 */
export default async function getQuote() {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_CHUCK_URL + (typeof process.env.NEXT_PUBLIC_API_CHUCK_CATGORY !== 'undefined' ? '?category=' + process.env.NEXT_PUBLIC_API_CHUCK_CATGORY : ''),
        {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const json = await res.json();

    return json.value
}