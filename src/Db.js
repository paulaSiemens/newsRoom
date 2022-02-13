import Parse from "parse";

export function getArchived(callBack) {
  const Idea = Parse.Object.extend("Idea");
  const IdeaQuery = new Parse.Query(Idea);
  IdeaQuery.equalTo("status", "Archived");
  IdeaQuery.include("owner");
  try {
    IdeaQuery.find().then((archived) => {
      callBack(archived);
    });
  } catch (error) {
    alert(error);
  }
}

export function getAssigned(callBack) {
  const Assigned = Parse.Object.extend("Assigned");
  const AssignedQuery = new Parse.Query(Assigned);
  AssignedQuery.equalTo("status", "Assigned");
  AssignedQuery.include("ideaId");
  AssignedQuery.include("userId");
  AssignedQuery.ascending("deadline");
  try {
    AssignedQuery.find().then((assigned) => {
      callBack(assigned);
    });
  } catch (error) {
    alert(error);
  }
}

export function getUnassigned(callBack) {
  const Idea = Parse.Object.extend("Idea");
  const IdeaQuery = new Parse.Query(Idea);
  IdeaQuery.equalTo("status", "Unassigned");
  try {
    IdeaQuery.find().then((unAssigned) => {
      callBack(unAssigned);
    });
  } catch (error) {
    alert(error);
  }
}

export function getSubmitted(callBack) {
  const Idea = Parse.Object.extend("Idea");
  const IdeaQuery = new Parse.Query(Idea);
  IdeaQuery.equalTo("status", "Submitted");
  IdeaQuery.include("owner");
  try {
    IdeaQuery.find().then((submitted) => {
      callBack(submitted);
    });
  } catch (error) {
    alert(error);
  }
}

export function getUsers(callBack) {
  const User = Parse.Object.extend("User");
  const UserQuery = new Parse.Query(User);
  //IdeaQuery.equalTo("status", "Submitted");
  try {
    UserQuery.find().then((users) => {
      callBack(users);
    });
  } catch (error) {
    alert(error);
  }
}

export function handleAssigned(userEmail, ideaId, deadline, callBack) {
  const Assigned = Parse.Object.extend("Assigned");
  const newAssigned = new Assigned();
  const UserQuery = new Parse.Query(Parse.User);
  UserQuery.equalTo("username", userEmail);
  try {
    UserQuery.find().then((user) => {
      console.log(user[0].id);
      newAssigned.set("userId", user[0]);
      newAssigned.set("ideaId", ideaId);
      newAssigned.set("deadline", deadline);
      ideaId.set("status", "Assigned");
      ideaId.set("owner", user[0]);
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
  } catch (error) {
    alert(error);
  }
}

export function handleSubmitted(
  imageName,
  imageData,
  title,
  description,
  assignment,
  callBack
) {
  const idea = assignment.get("ideaId");
  const image = new Parse.File(imageName, imageData);
  image.name = title;
  idea.set("image", image);
  idea.set("title", title);
  idea.set("description", description);
  try {
    idea.set("status", "Submitted").save();
    assignment.destroy().then((submittedIdea) => {
      alert('You submitted "' + title + '"');
      callBack();
    });
  } catch (error) {
    alert(error);
  }
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
  try {
    user.logIn().then((loggedInUser) => {
      alert("You have logged in with the username " + email);
      callBack("/assigned");
      window.location.reload(false);
    });
  } catch (error) {
    alert(error);
  }
}

export function handleLogoutAttempt(callBack) {
  alert("You have logged out");
  try {
    Parse.User.logOut().then((loggedOutUser) => {
      callBack(false);
      window.location.href = "/";
      window.location.reload(false);
    });
  } catch (error) {
    alert(error);
  }
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

export function handleIdea(title, description) {
  const Idea = Parse.Object.extend("Idea");
  const newIdea = new Idea();
  newIdea.set("title", title);
  newIdea.set("description", description);
  newIdea.set("user", Parse.User.current());
  try {
    newIdea.save().then((ideaSubmitted) => {
      alert('You submitted "' + title + '" as an article suggestion');
      window.location.reload(false);
    });
  } catch (error) {
    alert(error);
  }
}

export function isLoggedInCallBack(callBack) {
  if (Parse.User.current()) {
    callBack(true);
  } else {
    callBack(false);
  }
}

export function isLoggedIn() {
  if (Parse.User.current()) {
    return true;
  } else {
    return false;
  }
}

export function getUserRole() {
  return Parse.User.current().get("role");
}

export function getUserId() {
  return Parse.User.current().id;
}

export function connectToServer(applicationId, javascriptKey, serverURL) {
  try {
    Parse.initialize(applicationId, javascriptKey);
    Parse.serverURL = serverURL;
  } catch (error) {
    alert(error);
  }
}

export default {
  getArchived,
  getAssigned,
  getUnassigned,
  getSubmitted,
  getUsers,
  handleAssigned,
  handleSubmitted,
  handleArchived,
  handleLoginAttempt,
  handleLogoutAttempt,
  handleSignupAttempt,
  handleIdea,
  isLoggedInCallBack,
  isLoggedIn,
  getUserRole,
  getUserId,
  connectToServer,
};
