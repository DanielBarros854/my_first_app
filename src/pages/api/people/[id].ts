import { people } from "../../../../data";

const personHandler = ({ query: { id } }, res) => {
  const filtered = people.find((people_info) => people_info.id === id)

  if (filtered) {
    res.status(200).json(filtered)
  }
  res.status(404).json({ message: `User with id: ${id} not found.` })
}

export default personHandler;
