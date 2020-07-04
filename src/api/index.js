import axios from 'axios';
export const fetchSurah = async () => {
  const { data } = await axios.get('data/chapters.json');
  console.log(data);
  return data;
};
