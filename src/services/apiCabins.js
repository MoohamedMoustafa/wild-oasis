import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error(`Cabins could not be loaded,\n ${error.message}`);
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name.replaceAll("/", "-")}`;
  const imageURL = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // https://frlmxqosmqclnukyvuup.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imageURL }])
    .select();

  if (error) {
    throw new Error(`Cabin could not be created,\n ${error.message}`);
  }

  // 2. Upload image

  const { error: imageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (imageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.error(imageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}

export async function deleteCabin(id) {
  let { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error(`Cabin could not be deleted,\n ${error.message}`);
  }

  return data;
}
