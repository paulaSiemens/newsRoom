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

export function handleArchived(idea, callBack) {
  try {
    idea
      .set("status", "Archived")
      .save()
      .then((archivedIdea) => {
        alert('You archived "' + idea.get("title") + '"');
        callBack();
      });
  } catch (error) {
    alert(error);
  }
}

export function handleLoginAttempt(email, password, callBack) {
  const user = new Parse.User();
  user.setPassword(password);
  user.setUsername(email);
  user.logIn().then((loggedInUser) => {
    alert("You have logged in with the username " + email);
    callBack("/assigned");
    window.location.reload(false);
  });
}

export function handleSignupAttempt(email, password, role, callBack) {
  const newUser = new Parse.User();
  newUser.set("username", email);
  newUser.set("email", email);
  newUser.set("password", password);
  newUser.set("role", role);
  try {
    newUser.save().then((signedUpUser) => {
      alert("You have signed up as " + role + " with the username " + email);
      callBack("/login");
      window.location.reload(false);
    });
  } catch (error) {
    alert(error);
  }
}

export function handleIdea(imageName, imageData, title, description, callBack) {
  const Idea = Parse.Object.extend("Idea");
  const newIdea = new Idea();
  const image = new Parse.File(imageName, imageData);
  newIdea.set("title", title);
  newIdea.set("description", description);
  newIdea.set("user", Parse.User.current());
  image.name = title;
  newIdea.set("image", image);
  try {
    newIdea.save().then((ideaSubmitted) => {
      alert('You submitted "' + title + '" as an article suggestion');
      callBack("/selection");
      window.location.reload(false);
    });
  } catch (error) {
    alert(error);
  }
}

export default {
  getArchived,
  getAssigned,
  getUnassigned,
  getSubmitted,
  handleAssigned,
  handleArchived,
  handleLoginAttempt,
  handleSignupAttempt,
  handleIdea,
};
