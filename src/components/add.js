import React, { useState } from "react";

const initialList = [
  {
    id: "RN-BSN-PO1",
    name: "Baccalaureate Nurse & Patient-centered Care",
    Description:
      "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using",
    normal: true,
    mouseOver: false,
    focus: false,
  },
  {
    id: "RN-BSN-PO2",
    name: "Techniques to Effective Communication",
    description:
      "Use a broad base of techniques to communicate effectively with clients, families, healthcare teams, and communities.",
    normal: true,
    mouseOver: false,
    focus: false,
  },
  {
    id: "RN-BSN-PO4",
    name: "Leadership, Quality, Safety",
    description:
      "Integrate knowledge and skills in nursing leadership and management, quality improvement, and patient safety, as required, to provide healthcare.",
    normal: true,
    mouseOver: false,
    focus: false,
  },
  {
    id: "RN-BSN-PO5",
    name: "Promote Health & Prevent Disease",
    description:
      "Integrate knowledge and skills to promote health and prevent disease across the lifespan and the continuum of healthcare environments.",
    normal: true,
    mouseOver: false,
    focus: false,
  },
  {
    id: "RN-BSN-PO6",
    name: "Altruism, Integrity & Social Justice",
    description:
      "Practice professionalism, including the inherent values of altruism, autonomy, human dignity, integrity, and social justice.",
    normal: true,
    mouseOver: false,
    focus: false,
  },
];

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const Add = () => {
  const [list, setList] = useState(initialList);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const handleNameChange = (e) => { setName(e.target.value);};
  const handleIdChange = (e) => { setId(e.target.value);}
  const handleDescriptionChange = (e) => { setDescription(e.target.value);}
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = list.concat({id, name, description });
    setList(newList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={handleIdChange} />
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="text" value={description} onChange={handleDescriptionChange} />
        <button type="submit" > Add Item </button>
      </form>
      <List list={list} />
    </div>
  );
};

export default Add;
