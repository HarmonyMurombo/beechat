import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[1],
    firstName: "Harmony",
    lastName: "Murombo",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "harmony.jpg",
    friends: [],
    location: "Masvingo, Dendera Crescent",
    occupation: "FinX and Beechat Developer",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  }
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Harmony",
    lastName: "Murombo",
    location: "Masvingo, Dendera Crescent",
    description: "Hello everyone , i am the developer of FinX and Beechat ,beechat helps businesses and government to improve customer satisfaction and efficiency,which ultimately leads to better financial perfomance,if you have any questions feel free to ask",
    picturePath: "post1.jpg",
    userPicturePath: "harmony.jpg",
    likes: new Map([
      [userIds[1], true],
    ]),
    comments: [
      "wow the best and modern platforms in Zimbabwe FinX can help many businesses in Zimbabwe.",
      "Machine learning algorithms at its best",
      "Genius",
    ]
  }
];
