import React, {useContext} from 'react'
import { Col, Button } from 'react-bootstrap'
import{ThemeContext} from '../contexts/ThemeContext'

const Pagination = ({page, setPage, isPreviousData, hasMore}) => {
  const {isBlueTheme} = useContext(ThemeContext);

  return (
    <>
      <div className="pagination d-flex justify-content-between align-items-center mt-4">
        <Button
          className={isBlueTheme ? "blue-theme" : "dark-theme"}
          onClick={() => setPage((currentPage) => Math.max(currentPage - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </Button>

        <span>Current Page: {page}</span>

        <Button
          className={isBlueTheme ? "blue-theme" : "dark-theme"}
          onClick={() => {
            if (!isPreviousData && hasMore) {
              setPage((currentPage) => currentPage + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !hasMore}
        >
          Next Page
        </Button>
      </div>
    </>
  );
}

export default Pagination
