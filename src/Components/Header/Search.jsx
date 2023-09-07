import React from 'react'

export const Search = () => {
  return (
    <div className="search-form d-lg-inline-block">
      <div className="input-group">
        <input
          type="text"
          name="query"
          id="search-input"
          className="form-control"
          placeholder="search.."
          autofocus
          autoComplete="off"
        />
        <button
          type="button"
          name="search"
          id="search-btn"
          className="btn btn-flat"
        >
          <i className="mdi mdi-magnify" />
        </button>
      </div>
      <div id="search-results-container">
        <ul id="search-results" />
      </div>
    </div>
  );
}
