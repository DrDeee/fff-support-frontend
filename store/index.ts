import Group from "~/types/group";

interface IndexState {
  groups: Group[];
  selectedGroup: Group | null;
}

export function state(): IndexState {
  return {
    groups: [
      {
        id: "asfasasasfasf",
        name: "Website-AG",
        canManage: true,
        tickets: {
          open: 5,
          progress: 3,
          closed: 9,
        },
        notifications: {
          open: 2,
          progress: 0,
          closed: 0,
        },
      },
      {
        id: "asfasassdffasf",
        name: "Messenger-AG",
        canManage: true,
        tickets: {
          open: 0,
          progress: 1,
          closed: 3,
        },
        notifications: {
          open: 0,
          progress: 0,
          closed: 0,
        },
      },
      {
        id: "asfasfjfgjgffasf",
        name: "Regio-AG",
        canManage: false,
        tickets: {
          open: 2,
          progress: 5,
          closed: 11,
        },
        notifications: {
          open: 0,
          progress: 5,
          closed: 0,
        },
      },
      {
        id: "asfasasaqwewsfasf",
        name: "Website-AG",
        canManage: true,
        tickets: {
          open: 5,
          progress: 3,
          closed: 9,
        },
        notifications: {
          open: 2,
          progress: 0,
          closed: 0,
        },
      },
      {
        id: "asfasasswwwffasf",
        name: "Messenger-AG",
        canManage: true,
        tickets: {
          open: 0,
          progress: 1,
          closed: 3,
        },
        notifications: {
          open: 0,
          progress: 0,
          closed: 0,
        },
      },
      {
        id: "asfasfjfglllgffasf",
        name: "Regio-AG",
        canManage: false,
        tickets: {
          open: 2,
          progress: 5,
          closed: 11,
        },
        notifications: {
          open: 0,
          progress: 5,
          closed: 0,
        },
      },
      {
        id: "asfashjkhjksasfasf",
        name: "Website-AG",
        canManage: true,
        tickets: {
          open: 5,
          progress: 3,
          closed: 9,
        },
        notifications: {
          open: 2,
          progress: 0,
          closed: 0,
        },
      },
      {
        id: "asfasassdghjghjffasf",
        name: "Messenger-AG",
        canManage: true,
        tickets: {
          open: 0,
          progress: 1,
          closed: 3,
        },
        notifications: {
          open: 0,
          progress: 0,
          closed: 0,
        },
      },
      {
        id: "asfasfjfgjgffasdasf",
        name: "Regio-AG",
        canManage: false,
        tickets: {
          open: 2,
          progress: 5,
          closed: 11,
        },
        notifications: {
          open: 0,
          progress: 5,
          closed: 0,
        },
      }
    ],
    selectedGroup: null
  };
}
export const mutations = {
  selectGroup(state: IndexState, groupId: string) {
    state.selectedGroup = state.groups.find((g) => g.id === groupId) || null;
  },
};