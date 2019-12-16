import React from 'react';

function UserProfile(props) {
  let profile = props.profile;
  let date = new Date(profile.created_at);
  let readableMonth = date.toLocaleString('en-us', { month: 'long' });
  console.log(profile)
  console.log(date)
  console.log(readableMonth)

  return (
    <div className="profileInfo">
      <div className="profileLogo">
        <img className="avatar" src={profile.avatar_url} alt={profile.login} />
        <br />
        <a href={profile.html_url}>@{profile.login}</a>
      </div>
      <div>
        <h3>{profile.name}</h3>
        <h4>
          <i className="fa fa-map-marker" aria-hidden="true" />{' '}
          {profile.location}
        </h4>
        <h4>
          <a href={profile.blog} rel="noopener noreferrer" target="_blank">
            {profile.blog}
          </a>
        </h4>
        <h4>{profile.company ? `Company: ${profile.company}` : ``}</h4>
        <p>{profile.bio}</p>
      </div>
      <div>
        <p>
          <i className="fa fa-code-fork" aria-hidden="true" /> Repositories:{' '}
          {profile.public_repos}
        </p>
        <p>
          <i className="fa fa-sticky-note-o" aria-hidden="true" /> Gists:{' '}
          {profile.public_gists}
        </p>
        <p>
          <i className="fa fa-users" aria-hidden="true" /> Followers:{' '}
          {profile.followers}
        </p>
        <p>
          <i className="fa fa-users" aria-hidden="true" /> Following:{' '}
          {profile.following}
        </p>
        <p>
          <i className="fa fa-edit" aria-hidden="true" /> Commits: {' '}
          {profile.commits}
        </p>
        <h5>
          <i className="fa fa-calendar" aria-hidden="true" /> Member since:{' '}
          {readableMonth}, {date.getFullYear()}
        </h5>
      </div>
    </div>
  );
}

export default UserProfile;
