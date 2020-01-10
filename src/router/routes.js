
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'weddings', component: () => import('pages/PageWeddings.vue') },
      { path: 'business', component: () => import('pages/PageBusiness.vue') },
      { path: 'testimonials', component: () => import('pages/PageTestimonials.vue') },
      { path: 'map', component: () => import('pages/PageMap.vue') },
      { path: 'contact', component: () => import('pages/PageContactTwo.vue') },
      { path: 'all', component: () => import('pages/AllRooms.vue') },
      { path: 'guidelines', component: () => import('pages/PageGuidelines.vue') },
      { path: 'fee', component: () => import('pages/PageFee.vue') },
      { path: 'capacity', component: () => import('pages/PageCapacity.vue') },
      { path: 'oak', component: () => import('pages/rooms/OakRoom.vue') },
      { path: 'river', component: () => import('pages/rooms/RiverRoom.vue') },
      { path: 'magnolia', component: () => import('pages/rooms/MagnoliaRoom.vue') },
      { path: 'kennedyb', component: () => import('pages/rooms/KennedybRoom.vue') },
      { path: 'ogeechee', component: () => import('pages/rooms/OgeecheeRoom.vue') },
      { path: 'kennedya', component: () => import('pages/rooms/KennedyaRoom.vue') },
      { path: 'computer', component: () => import('pages/rooms/ComputerRoom.vue') },
      { path: 'classroom', component: () => import('pages/rooms/ClassroomRoom.vue') },
      { path: 'atrium', component: () => import('pages/rooms/AtriumRoom.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
