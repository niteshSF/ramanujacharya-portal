const works = {
  name: "Works of Ramanujacharya",
  children: [
    {
      name: "Vedartha Sangraha",
    },
    {
      name: "Gita Bhashyam",
    },
    {
      name: "Bramasutra Vyakhya",
      children: [
        {
          name: "Vedantasarah",
        },
        {
          name: "Sri Bhashyam",
          children: [
            {
              name: "Chapter 1",
              children: [
                { name: "Pada 1" },
                { name: "Pada 2" },
                { name: "Pada 3" },
                { name: "Pada 4" },
              ],
            },
            {
              name: "Chapter 2",
            },
            {
              name: "Chapter 3",
            },
            {
              name: "Chapter 4",
            },
          ],
        },
        {
          name: "Vedanta dipah",
        },
      ],
    },
    {
      name: "Gadyatrayam",
      children: [
        {
          name: "Saranagati Gadyam",
        },
        {
          name: "Sriranga Gadyam",
        },
        {
          name: "Srivaiskuntha Gadyam",
        },
      ],
    },
    {
      name: "Nityagranthah",
    },
  ],
}

export default works
