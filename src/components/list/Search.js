import React from "react";

export default function Search({ searchTerm, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}
