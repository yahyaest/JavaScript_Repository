export const columns = [
         {
           title: "id",
           value: (user) => {
             return user.id;
           },
         },
         {
           title: "UserName",
           value: (user) => {
             return user.username;
           },
         },
         // {
         //   title: "Password",
         //   value: (user) => {
         //     return user.password;
         //   },
         // },
         {
           title: "Is_Superuser",
           value: (user) => {
             return `${user.is_superuser}`;
           },
         },
         {
           title: "Email",
           value: (user) => {
             return `${user.email}`;
           },
         },
         // {
         //   title: "Is_Active",
         //   value: (user) => {
         //     return `${user.is_active}`;
         //   },
         // },
         {
           title: "Date_Joined",
           value: (user) => {
             return user.date_joined;
           },
         },
       ];
