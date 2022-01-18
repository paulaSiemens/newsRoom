import Parse from "parse";

export function getArchived(callBack) {
  const Idea = Parse.Object.extend("Idea");
  const IdeaQuery = new Parse.Query(Idea);
  IdeaQuery.equalTo("status", "Archived");
  IdeaQuery.find().then((archived) => {
    callBack(archived);
  });
}

export function getAssigned(callBack) {
  const Assigned = Parse.Object.extend("Assigned");
  const AssignedQuery = new Parse.Query(Assigned);
  AssignedQuery.equalTo("status", "Assigned");
  AssignedQuery.include("ideaId");
  AssignedQuery.include("userId");
  AssignedQuery.find().then((assigned) => {
    callBack(assigned);
  });
}

export function getUnassigned(callBack) {
  const Idea = Parse.Object.extend("Idea");
  const IdeaQuery = new Parse.Query(Idea);
  IdeaQuery.equalTo("status", "Unassigned");
  IdeaQuery.find().then((unAssigned) => {
    callBack(unAssigned);
  });
}

export function getSubmitted(callBack) {
  const Idea = Parse.Object.extend("Idea");
  const IdeaQuery = new Parse.Query(Idea);
  IdeaQuery.equalTo("status", "Submitted");
  IdeaQuery.find().then((submitted) => {
    callBack(submitted);
  });
}

export function handleAssigned(userEmail, ideaId, callBack) {
  const Assigned = Parse.Object.extend("Assigned");
  const newAssigned = new Assigned();
  const UserQuery = new Parse.Query(Parse.User);
  UserQuery.equalTo("username", userEmail);
  UserQuery.find().then((user) => {
    console.log(user[0].id);
    newAssigned.set("userId", user[0]);
    newAssigned.set("ideaId", ideaId);
    ideaId.set("status", "Assigned");
    try {
      newAssigned.save();
      ideaId.save().then((assignedIdea) => {
        alert(
          'You assigned "' +
            ideaId.get("title") +
            '" to the user with the email ' +
            userEmail
        );
        callBack();
      });
    } catch (error) {
      alert(error);
    }
  });
}

export default {
  getArchived,
  getAssigned,
  getUnassigned,
  handleAssigned,
  getSubmitted,
};
