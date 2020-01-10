<template>
  <q-page padding>
		<q-btn
			to="/"
			:style="
      $q.dark.isActive
        ? 'color: white'
        : 'color: #1e1e1e'"
			icon="chevron_left"
			v-bind:label="$t('mainMenu.back')"
			flat />

		<h5 
      style="font-weight: bold"
      :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: #1e1e1e'"
      >{{ $t('mainMenu.contact') }}
      </h5>

    <div class="space"></div>
    <!-- Begin Contact Section -->
    <h5 
      :style="
          $q.dark.isActive
          ? 'color: white'
          : 'color: blue'">Hello from Contact Page</h5>

    <div class="column items-center text-center" style="max-width: 600px" 
        :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: blue'">
    

  <div class="kwes-form" style="width:800px; margin:0 auto;">
    <form method="POST" action="https://kwes.io/api/foreign/forms/LNH41Q5oBoei2F83tX4B">
      <label for="name">Your Name</label>
        <input type="text" name="name" rules="required|max:255">
        <br>
        <br>
        <label for="telephone">Telephone Number: </label>
        <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555">
        <br>
        <br>
        <label for="email-address">Email Address: </label>
        <input type="email" name="email" rules="email">
        <br>
        <br>
        <q-splitter
          v-model="splitterModel"
          style="height: 400px"
        >

      <template v-slot:before>
        <div class="q-pa-md">
          <div class="text-h4 q-mb-md">
            <label for="datepicker">Select Date: </label>
          </div>
          <div class="q-my-md">
            <input type="datepicker" name="date" placeholder="December 06, 2019">
          </div>
        </div>
      </template>

      <template v-slot:after>
        <div class="q-pa-md">
          <div class="text-h4 q-mb-md">
            <label for="room">Select Room: </label>
          </div>
          <div class="q-my-md">
            <select name="room" id="room" required="">
            <option value="Select" selected="" disabled="">Select</option>
            <option value="The Oak Room">The Oak Room</option>
            <option value="The River Room">The River Room</option>
            <option value="Magnolia Room">Magnolia Room</option>
            <option value="Kennedy Boardroom">Kennedy Boardroom</option>
            <option value="Ogeechee Boardroom">Ogeechee Boardroom</option>
            <option value="Kennedy Auditorium">Kennedy Auditorium</option>
            <option value="Computer Labs">Computer Labs</option>
            <option value="Classrooms">Classrooms</option>
            <option value="The Atrium">The Atrium</option>
          </select>
          </div>
        </div>
      </template>

    </q-splitter>
        <label for="room">Select Room: </label>
          <br>
          <br>
          <br>
          <br>
          <br>
          <textarea rows="5" name="message" id="message" placeholder="Write your message here..." required=""></textarea>
          <br>
        <button type="submit">Submit</button>
    </form>  
  </div>
  </div>
    <!-- End Contact Section -->
  <footer />
    </q-page>   
</template>

<script>
import Footer from 'components/footer/Footer.vue'

export default {
  components: { Footer },
  data: () => ({
  }),
  mounted() {
    let kwesScript =
  document.createElement('script')
    kwesScript.setAttribute('src',
  'https://kwes.io/js/kwes.js')
    document.head.appendChild(kwesScript)
  },
  data () {
    return {
      splitterModel: 50 // start at 50%
    }
  }
}
</script>