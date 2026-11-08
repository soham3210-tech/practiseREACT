const data = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/profile/details",
        children : [
          {
            label: "Location",
            to: "/profile/details/location",
            children: [
              { label: "City", to: "/profile/details/location/city" },
              { label: "Country", to: "/profile/details/location/country" },
              { label: "Street", to: "/profile/details/location/street" },
            ],
          },
        ],
      },
      {
        label: "Education",
        to: "/profile/education",
        children: [
          { label: "School", to: "/profile/education/school" },
          { label: "University", to: "/profile/education/university" },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "/settings/account",
        children: [
          { label: "Username", to: "/settings/account/username" },
          { label: "Password", to: "/settings/account/password" },
        ],
      },
      {
        label: "Security",
        to: "/settings/security",
        children: [
          { label: "Login", to: "/settings/security/login" },
          {
            label: "Register",
            to: "/settings/security/register",
            children: [
              { label: "Email", to: "/settings/security/register/email" },
              { label: "Phone", to: "/settings/security/register/phone" },
              { label: "Social", to: "/settings/security/register/social" },
            ],
          },
        ],
      },
      {
        label: "Notifications",
        to: "/settings/notifications",
        children: [
          { label: "Email Alerts", to: "/settings/notifications/email" },
          { label: "Push Notifications", to: "/settings/notifications/push" },
        ],
      },
    ],
  },
];

export default data;
