import { Module, VuexModule, VuexMutation } from "nuxt-property-decorator";

interface Group {
  id: string;
  name: string;
  canManage: boolean;
  tickets: {
    open: number;
    progress: number;
    closed: number;
  };
  notifications: {
    open: number;
    progress: number;
    closed: number;
  };
}

@Module({
  name: "index",
  namespaced: false,
  stateFactory: false,
})
class IndexStore extends VuexModule {
  activeGroup?: string = "asfasasasfasf";
  groups: Group[] = [
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
  ];

  @VuexMutation
  clear() {
    this.activeGroup = undefined;
    this.groups = [];
  }

  @VuexMutation
  setCurrentGroup(groupId: string) {
    this.activeGroup = groupId;
  }
}

export const state = () => IndexStore.state;
export const mutations = IndexStore.mutations;
