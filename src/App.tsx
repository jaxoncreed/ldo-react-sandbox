import React, { useEffect, useState } from 'react';
import { FoafProfileFactory } from './ldo/foafProfile.ldoFactory';
import { FoafProfile } from './ldo/foafProfile.typings';

import { construct } from "@shexjs/validator";
// The typings for neighborhood-rdfjs are incorrect
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ctor } from "@shexjs/neighborhood-rdfjs";
import { FoafProfileShapeType } from './ldo/foafProfile.shapeTypes';

function App() {
  const [profile, setProfile] = useState<FoafProfile>();

  useEffect(() => {
    const profile = FoafProfileFactory.new("https://example.com/profile");
    profile.name = "Jackson Morgan";
    profile.type = { "@id": "Person" };

    const profileId = profile["@id"] || "";

    // Validate
    const validationResult = construct(FoafProfileShapeType.schema, ctor(profile.$dataset()), {}).validate([
      {
        node: profileId,
        shape: FoafProfileShapeType.shape,
      },
    ]);
    console.log(JSON.stringify(validationResult, null, 2));
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
