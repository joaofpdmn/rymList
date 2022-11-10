import joi, { number } from "joi";

const albumsSchema = joi.object({
    name: joi.string().min(1).required().trim(),
    artist: joi.string().min(1).required().trim(),
    rating: joi.number().greater(0).less(11).required(),
    critic: joi.string().min(0).required().trim(),
});

export { albumsSchema };