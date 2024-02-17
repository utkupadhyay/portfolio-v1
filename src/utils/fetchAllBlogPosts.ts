import supabase from '../database/supabaseClient';

export const fetchAllBlogs = async (setState: any) => {
  let { data, error } = await supabase.from('blogposts').select('*');
  if (data) {
    setState(data);
  }
  if (error) {
    console.error(error);
  }
};
