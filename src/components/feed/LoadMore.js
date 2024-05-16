export function LoadMore({ loading, nextPage, handleLoadMore }) {
    return (
        <>
            {!loading && nextPage && (
                <div className="LoadMore button" onClick={handleLoadMore}>
                    더보기
                </div>
            )}
        </>
    );
}
