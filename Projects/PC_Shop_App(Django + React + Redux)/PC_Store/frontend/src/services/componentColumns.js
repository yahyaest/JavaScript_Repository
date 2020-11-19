const id = {
  title: "id",
  value: (component) => {
    return component.id;
  },
};
const name = {
  title: "Name",
  value: (component) => {
    return component.name;
  },
};
const price = {
  title: "Price",
  value: (component) => {
    return component.price;
  },
};

export const columns = {
  cpu: [
    id,
    name,
    price,
    {
      title: "Frequency (GHz)",
      value: (component) => {
        return component.frequency;
      },
    },
    {
      title: "Cache (Mo)",
      value: (component) => {
        return component.cache;
      },
    },
    {
      title: "Cores",
      value: (component) => {
        return component.cores;
      },
    },
  ],

  gpu: [
    id,
    name,
    price,
    {
      title: "Frequency (MHz)",
      value: (component) => {
        return component.frequency;
      },
    },
    {
      title: "Memory (Go)",
      value: (component) => {
        return component.memory;
      },
    },
  ],

  ram: [
    id,
    name,
    price,
    {
      title: "Frequency (MHz)",
      value: (component) => {
        return component.frequency;
      },
    },
    {
      title: "Capacity (Go)",
      value: (component) => {
        return component.capacity;
      },
    },
  ],
};
