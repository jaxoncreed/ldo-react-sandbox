import React, { useEffect, useState } from 'react';
import { FoafProfileFactory } from './ldo/foafProfile.ldoFactory';
import { FoafProfile } from './ldo/foafProfile.typings';

function App() {
  const [profile, setProfile] = useState<FoafProfile>();

  useEffect(() => {
    const profile = FoafProfileFactory.new();
    profile.name = "Jackson Morgan";
    setProfile(profile);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Name: {profile?.name}</p>
    </div>
  );
}

export default App;
