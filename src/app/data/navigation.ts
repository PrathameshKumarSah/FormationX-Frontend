export const navigationData = {
  "navLinks": [
    {
      "label": "Home",
      "href": "/",
      "type": "link"
    },
    {
      "label": "Hackathons",
      "href": "/hackathons",
      "type": "link"
    },
    {
      "label": "Features",
      "href": "#",
      "type": "dropdown",
      "dropdownItems": [
        {
          "label": "Spaces",
          "href": "/spaces",
          "description": "Collaborative workspaces",
          "icon": "🏢"
        },
        {
          "label": "Sponsors",
          "href": "/sponsors",
          "description": "Find sponsorship opportunities",
          "icon": "🤝"
        },
        {
          "label": "Vendors",
          "href": "/vendors",
          "description": "Service providers & tools",
          "icon": "🛠️"
        },
        {
          "label": "Team Guidance",
          "href": "/team-guidance",
          "description": "Build effective teams",
          "icon": "👥"
        },
        {
          "label": "Mentorship",
          "href": "/mentorship",
          "description": "Get expert guidance",
          "icon": "🎓"
        },
        // {
        //   "label": "Resources",
        //   "href": "/resources",
        //   "description": "Learning materials & tools",
        //   "icon": "📚"
        // }
      ]
    },
    {
      "label": "About",
      "href": "/about",
      "type": "link"
    },
    {
      "label": "Contact Us",
      "href": "/contact",
      "type": "link"
    }
  ],
  "ctaButtons": {
    "signIn": {
      "label": "Sign In",
      "href": "/signin",
      "variant": "outline"
    },
    "getStarted": {
      "label": "Get Started",
      "href": "/signup",
      "variant": "primary"
    }
  }
}