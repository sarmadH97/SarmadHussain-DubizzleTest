const Gist = ({ gist }) => {

  const gistUser = gist;

  //date formatting
  function formatDate(inputDate) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const date = new Date(inputDate);
    return date.toLocaleDateString(undefined, options);
  }
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="card-imgText">
            <img
              height={30}
              width={30}
              src={gistUser.owner.avatar_url}
              alt="Card Image"
            />
            <a
              className="card-header-text textStyle"
              href={gistUser.url}
              target="_blank"
            >
              {gistUser.owner.login}
            </a>
          </div>
          <div className="card-rightText">
            <a
              className="righttexts textStyle"
              href={gistUser.commits_url}
              target="_blank"
            >
              <i className="fa fa-angle-left "></i>
              <i className="fa fa-angle-right "></i>
              {`Files ${Object.keys(gistUser.files).length}`}
            </a>
            <a
              className="righttexts textStyle"
              href={gistUser.forks_url}
              target="_blank"
            >
              <i className="fa fa-code-fork "></i>
              {"Forks"}
            </a>
            <a
              className="righttexts textStyle"
              href={gistUser.comments_url}
              target="_blank"
            >
              <i className="fa fa-comment-o"></i>
              {`Comments ${gist.comments}`}
            </a>
            <a
              className="righttexts textStyle"
              href={gistUser.owner_starred_url}
              target="_blank"
            >
              <i className="fa fa-star"></i>
              {"Star"}
            </a>
          </div>
        </div>
        <div className="card-content">
          <div className="card-date">
            <div>
              <span>Created at </span>
              <span>{formatDate(gistUser.created_at)}</span>
            </div>
            <div className="lastDate">
              <span>Last Date </span>
              <span>{formatDate(gistUser.updated_at)}</span>
            </div>
          </div>
          <div className="card-generatedText">
            <p>{gistUser.description}</p>
          </div>
          <div>
            {Object.keys(gistUser.files).length ? (
              <div className="card-Files">
                {Object.keys(gistUser.files).map((file) => {
                  return (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                        fill="blue"
                      >
                        <path d="M 12.5 4 C 10.032499 4 8 6.0324991 8 8.5 L 8 39.5 C 8 41.967501 10.032499 44 12.5 44 L 35.5 44 C 37.967501 44 40 41.967501 40 39.5 L 40 18.5 A 1.50015 1.50015 0 0 0 39.560547 17.439453 L 39.544922 17.423828 L 26.560547 4.4394531 A 1.50015 1.50015 0 0 0 25.5 4 L 12.5 4 z M 12.5 7 L 24 7 L 24 15.5 C 24 17.967501 26.032499 20 28.5 20 L 37 20 L 37 39.5 C 37 40.346499 36.346499 41 35.5 41 L 12.5 41 C 11.653501 41 11 40.346499 11 39.5 L 11 8.5 C 11 7.6535009 11.653501 7 12.5 7 z M 27 9.1210938 L 34.878906 17 L 28.5 17 C 27.653501 17 27 16.346499 27 15.5 L 27 9.1210938 z"></path>
                      </svg>
                      <a
                        className="textStyle"
                        href={file.raw_url}
                        target="_blank"
                      >
                        {gistUser.files[file].filename}
                      </a>
                    </>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gist;
