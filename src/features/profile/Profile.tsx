import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

import {
  getCurrentUser,
  updateCurrentUser,
  type AppUser,
} from "@/services/authService";
import { showError, showSuccess } from "@/services/notificationService";
import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setFullName(user.fullName);
      setEmail(user.email);
      setPassword(user.password);
      setProfilePicture(user.profilePicture);
    }
  }, []);

  const resizeImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const image = new Image();

        image.onload = () => {
          const canvas = document.createElement("canvas");
          const maxSize = 300;

          let width = image.width;
          let height = image.height;

          if (width > height) {
            if (width > maxSize) {
              height = Math.round((height * maxSize) / width);
              width = maxSize;
            }
          } else {
            if (height > maxSize) {
              width = Math.round((width * maxSize) / height);
              height = maxSize;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const context = canvas.getContext("2d");

          if (!context) {
            reject("Could not process image");
            return;
          }

          context.drawImage(image, 0, 0, width, height);

          const compressedImage = canvas.toDataURL("image/jpeg", 0.75);

          resolve(compressedImage);
        };

        image.onerror = () => {
          reject("Invalid image file");
        };

        image.src = reader.result as string;
      };

      reader.onerror = () => {
        reject("Could not read image file");
      };

      reader.readAsDataURL(file);
    });
  };

  const handleProfilePictureChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const compressedImage = await resizeImageToBase64(file);
      setProfilePicture(compressedImage);
      showSuccess("Profile picture selected. Press Save Profile Changes.");
    } catch {
      showError("Could not upload profile picture");
    }
  };

  const handleRemoveProfilePicture = () => {
    setProfilePicture(undefined);
    showSuccess("Profile picture removed. Press Save Profile Changes.");
  };

  const handleSaveProfile = () => {
    if (!currentUser) {
      showError("No logged-in user found");
      return;
    }

    if (!fullName || !email || !password) {
      showError("Name, email, and password cannot be empty");
      return;
    }

    const updatedUser: AppUser = {
      ...currentUser,
      fullName,
      email,
      password,
      profilePicture,
    };

    try {
      const result = updateCurrentUser(updatedUser);

      if (!result.success) {
        showError(result.message);
        return;
      }

      setCurrentUser(updatedUser);

      window.dispatchEvent(new Event("profileUpdated"));

      showSuccess("Profile saved successfully. Refresh or navigate to see updates.");
    } catch {
      showError("Profile picture is too large. Please choose a smaller image.");
    }
  };

  if (!currentUser) {
    return (
      <div>
        <h1 className={pageTitle}>Profile</h1>

        <div className={`mt-8 ${darkCard}`}>
          <p className="text-[#A3A3A3]">
            No logged-in user found. Please login again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className={pageTitle}>Profile</h1>

      <p className={pageSubtitle}>
        Manage your account credentials and profile picture.
      </p>

      <div className={`mt-8 ${darkCard}`}>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl bg-[#E50914]/15 text-5xl">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              "👤"
            )}
          </div>

          <div>
            <h2 className="text-2xl font-black text-white">
              {currentUser.fullName}
            </h2>

            <p className="mt-1 text-[#A3A3A3]">{currentUser.email}</p>

            <p className="mt-2 inline-block rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-bold uppercase text-[#FF4D00]">
              {currentUser.role}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <TextField
            label="Full Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            fullWidth
          />

          <TextField
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />

          <TextField
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="contained" component="label">
            Upload Profile Picture
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={handleRemoveProfilePicture}
          >
            Remove Picture
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleSaveProfile}
          >
            Save Profile Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;