"use client";

export default function Error({statusCode}: { statusCode: number }) {
    return (
        <main>
            <div>
                <p>An Error appeared, please try again</p>
                <p>Error Code: {statusCode}</p>
            </div>
        </main>
    );
}
