<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="$q.dark.isActive ? 'bg-brand-dark' : 'bg-grey-3'"
  >

    <q-header
      elevated
      class="bg-brown-6"
    >
      <q-toolbar
        style="height: 75px"
        class="shadow-18"
        :style="
          $q.dark.isActive
            ? 'background:linear-gradient(45deg, #7d6855, 	#57483B)'
            : 'background:linear-gradient(135deg, #57483B,  #7d6855	)'
        "
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-space />

        <q-toolbar-title class="absolute-center">
          <img
            src="statics/logo.png"
            height="65px"
            class="logo"
          >
        </q-toolbar-title>

        <q-space />
        <div v-if="$q.platform.is.mobile">
          <q-btn-dropdown
            dense
            class="absolute-right"
            stretch
            flat
            v-bind:label="$t('mainMenu.rooms')"
            style="padding-left: 20px"
            :content-class="
        $q.dark.isActive
          ? 'bg-brand-dark'
          : 'bg-grey-3'"
          >
            <q-list>
              <q-item-label
                header
                :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
              >{{ $t('mainMenu.theVenues') }}</q-item-label>

              <q-separator />
              <q-item
                to="/oak"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.oakRoom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/oak/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/river"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.riverRoom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/river/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/magnolia"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.magnoliaRoom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/magnolia/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/kennedyb"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.kennedyBoardroom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/kennedy/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/ogeechee"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.ogeecheeBoardroom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/ogeechee/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="kennedya"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.kennedyAuditorium') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/kennedya/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/computer"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.computerLabs') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/computer/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/classroom"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.classrooms') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/classroom/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="atrium"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.theAtrium') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/atrium/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <!-- Begin Desktop Buttons -->
        <div v-if="$q.platform.is.desktop">
          <!-- Dark Mode Toggle -->
          <q-btn
            :icon="$q.dark.isActive ? 'wb_sunny' : 'brightness_3'"
            flat
            class="absolute-right"
            style="margin-right: 2em; margin-top: 1.4em"
            dense
            round
            @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
            no-caps
          >
          </q-btn>
          <!-- Dark Mode Toggle -->
          <!-- Rooms Dropdown -->
          <q-btn-dropdown
            dense
            class="absolute-right"
            stretch
            flat
            v-bind:label="$t('mainMenu.rooms')"
            style="margin-right: 5.9em; padding-left: 1em"
            :content-class="
            $q.dark.isActive 
              ? 'bg-grey-10' 
              : 'bg-grey-4'"
          >
            <q-list>
              <q-item-label
                header
                :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
              >{{ $t('mainMenu.theVenues') }}</q-item-label>

              <q-separator />
              <q-item
                to="/oak"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.oakRoom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/oak/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/river"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.riverRoom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/river/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/magnolia"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.magnoliaRoom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/magnolia/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/kennedyb"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.kennedyBoardroom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/kennedy/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/ogeechee"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.ogeecheeBoardroom') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/ogeechee/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="kennedya"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.kennedyAuditorium') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/kennedya/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/computer"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.computerLabs') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/computer/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="/classroom"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.classrooms') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/classroom/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                to="atrium"
                tag="label"
                v-ripple
              >
                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t('mainMenu.theAtrium') }}</q-item-section>
                <q-item-section thumbnail>
                  <img
                    src="statics/atrium/business/bg-gallery-1.jpg"
                    style="margin-right: 10px"
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- Rooms Dropdown -->
          <!-- Language Dropdown -->
          <q-btn-dropdown
            stretch
            flat
            style="margin-right: 13em"
            class="absolute-right"
            :label="$t('mainMenu.language')"
            :content-class="
        $q.dark.isActive
          ? 'bg-brand-dark'
          : 'bg-grey-3'"
          >
            <q-list>

              <q-item-label
                header
                :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
              >
              </q-item-label>
              <q-item
                @click="setLocale('en-us')"
                tag="label"
                style="margin-top: -2.3em"
                v-ripple
              >
                <q-item-section
                  thumbnail
                  style="padding-left: 10px"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_the_United_States_of_America_%281795-1818%29.svg"
                    style="margin-right: 10px"
                  >
                </q-item-section>

                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t("mainMenu.english") }}</q-item-section>

              </q-item>

              <q-separator />

              <q-item
                @click="setLocale('es')"
                tag="label"
                v-ripple
              >
                <q-item-section
                  thumbnail
                  style="padding-left: 10px"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
                    style="margin-right: 10px"
                  >
                </q-item-section>

                <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t("mainMenu.spanish") }}</q-item-section>

              </q-item>
              <q-separator />
            </q-list>

          </q-btn-dropdown>
          <!-- Language Dropdown -->
        </div>
        <!-- End Desktop Buttons -->

      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :content-class="
        $q.dark.isActive
          ? 'bg-brand-dark'
          : 'bg-grey-4'
      "
    >

      <q-list>
        <q-item-label
          header
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
        >{{ $t("mainMenu.navigation") }}</q-item-label>

        <q-item
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          exact
          clickable
          to="/"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label :style="
                $q.dark.isActive
                  ? 'color: white'
                  : 'color: black'">{{ $t("mainMenu.home") }}

            </q-item-label>
            <!--
            <q-item-label>{{ nav.label }}</q-item-label>
            -->
          </q-item-section>
        </q-item>

        <q-item
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          exact
          clickable
          to="/business"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="attach_file" />
          </q-item-section>
          <q-item-section>
            <q-item-label :style="
                $q.dark.isActive
                  ? 'color: white'
                  : 'color: black'">{{ $t("mainMenu.business") }}

            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          exact
          clickable
          to="/weddings"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="local_bar" />
          </q-item-section>
          <q-item-section>
            <q-item-label :style="
                $q.dark.isActive
                  ? 'color: white'
                  : 'color: black'">{{ $t("mainMenu.weddings") }}

            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          exact
          clickable
          to="/testimonials"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label :style="
                $q.dark.isActive
                  ? 'color: white'
                  : 'color: black'">{{ $t("mainMenu.testimonials") }}

            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          exact
          clickable
          to="/map"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>
          <q-item-section>
            <q-item-label :style="
                $q.dark.isActive
                  ? 'color: white'
                  : 'color: black'">{{ $t("mainMenu.map") }}

            </q-item-label>
          </q-item-section>
        </q-item>
        <!--
        <q-item
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          exact
          clickable
          to="/contact"
          active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="mail_outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              :style="
                $q.dark.isActive
                  ? 'color: white'
                  : 'color: black'"
              >{{ $t("mainMenu.contact") }}

            </q-item-label>  
          </q-item-section>
        </q-item>
        -->
      </q-list>

      <!--
        <q-btn color="pink" class="full-width" glossy unelevated icon="360" label="START TOUR" v-ripple @click="viewVR()"/>
      </div>
      <div class="q-pa-md">
        <q-btn style="background: goldenrod; color: white" class="full-width" glossy unelevated icon="meeting_room" label="View All Rooms" to="/all"/>
       -->

      <!-- Begin Desktop PDF Button -->
      <div
        class="q-pa-md"
        v-if="$q.platform.is.desktop"
      >
        <q-btn-dropdown
          style="background: blue; color: white"
          class="full-width"
          glossy
          unelevated
          icon="attach_money"
          v-bind:label="$t('mainMenu.pricingButton')"
          :content-class="
            $q.dark.isActive
              ? 'bg-grey-9'
              : 'bg-grey-3'"
        >

          <q-list>
            <q-separator />
            <q-item
              to="/guidelines"
              tag="label"
              v-ripple
            >
              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg">
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"><strong>{{ $t('mainMenu.pdfRentalGuidelines') }}</strong></q-item-section>

            </q-item>
            <q-separator />
            <q-item
              to="/fee"
              tag="label"
              v-ripple
            >
              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg">
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"><strong>{{ $t('mainMenu.pdfFeeSchedule') }}</strong></q-item-section>
            </q-item>
            <q-separator />
            <q-item
              to="/capacity"
              tag="label"
              v-ripple
            >

              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg">
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"><strong>{{ $t('mainMenu.pdfCapacityChart') }}</strong></q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- End Desktop PDF Button -->

      <!-- Begin Mobile PDF Button -->
      <div
        class="q-pa-md"
        v-if="$q.platform.is.mobile"
      >
        <q-btn-dropdown
          style="background: blue; color: white"
          class="full-width"
          glossy
          unelevated
          icon="attach_money"
          v-bind:label="$t('mainMenu.pricingButton')"
          :content-class="
            $q.dark.isActive
              ? 'bg-grey-9'
              : 'bg-grey-3'"
        >

          <q-list>
            <q-separator />
            <q-item
              @click="rentalGuidelines"
              tag="label"
              v-ripple
            >
              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg">
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"><strong>{{ $t('mainMenu.pdfRentalGuidelines') }}</strong></q-item-section>

            </q-item>
            <q-separator />
            <q-item
              @click="feeSchedule()"
              tag="label"
              v-ripple
            >
              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg">
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"><strong>{{ $t('mainMenu.pdfFeeSchedule') }}</strong></q-item-section>
            </q-item>
            <q-separator />
            <q-item
              @click="capacityChart()"
              tag="label"
              v-ripple
            >

              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg">
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"><strong>{{ $t('mainMenu.pdfCapacityChart') }}</strong></q-item-section>
            </q-item>
            <q-separator />
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- End Mobile PDF Button -->
      <div class="column items-center text-center badges">
        <img
          src="statics/verticalBadges.png"
          class="absolute-bottom"
          style="height: 600px; padding-bottom: 105%; padding-left: 30%"
        >
        <img
          src="statics/bottom-logo-dark.png"
          class="absolute-bottom"
          style="height: 300px; padding-bottom: 50%; padding-left: 33%"
        />
        <div
          style="font-weight: bold; padding-left: 10px; padding-right: 10px; padding-bottom: 25%; margin-top: 20px"
          class="text-h7 absolute-bottom"
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
        >{{ $t("mainMenu.equalOpp") }}
        </div>
      </div>
      <!-- Mobile Menu Buttons -->
      <div v-if="$q.platform.is.mobile">
        <q-btn
          :icon="$q.dark.isActive ? 'wb_sunny' : 'brightness_3'"
          flat
          class="absolute-right"
          style="margin-right: 96px; margin-top: 15px;"
          dense
          round
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          no-caps
        >
        </q-btn>
        <q-btn-dropdown
          stretch
          dense
          flat
          class="absolute-top-right"
          style="padding-top: 1.2em; padding-bottom: 1em; padding-left: 1em;"
          icon="language"
          :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'"
          :content-class="
          $q.dark.isActive
            ? 'bg-brand-dark'
            : 'bg-grey-3'"
        >
          <q-list>

            <q-separator />
            <q-item
              @click="setLocale('en-us')"
              tag="label"
              v-ripple
            >
              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                  style="margin-right: 10px"
                >
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t("mainMenu.english") }}</q-item-section>

            </q-item>

            <q-separator />

            <q-item
              @click="setLocale('es')"
              tag="label"
              v-ripple
            >
              <q-item-section
                thumbnail
                style="padding-left: 10px"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
                  style="margin-right: 10px"
                >
              </q-item-section>

              <q-item-section :style="
          $q.dark.isActive
            ? 'color: white'
            : 'color: black'">{{ $t("mainMenu.spanish") }}</q-item-section>

            </q-item>

            <q-separator />
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- End Mobile Menu Buttons -->
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-page-sticky
        position="bottom-right"
        :offset="[20, 30]"
        v-if="$q.platform.is.desktop"
      >
        <q-fab
          icon="keyboard_arrow_up"
          color="pink"
          direction="up"
          position="bottom-right"
          :offset="[20, 30]"
        >
          <q-fab-action
            style="background: goldenrod; color: white"
            icon="meeting_room"
            to="/all"
          />
          <q-fab-action
            color="pink"
            icon="360"
            @click="viewVr()"
          />
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',

  methods: {
    setLocale (locale) {
      this.$i18n.locale = locale
      import(`quasar/lang/${locale}`).then(({ default: messages }) => {
        this.$q.lang.set(messages)
      })
    },
    viewVr () {
      openURL('https://venuesatotc.com/tour')
    },
    oakRoom () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    riverRoom () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    magnoliaRoom () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    kennedyBoardroom () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    ogeecheeBoardroom () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    kennedyAuditorium () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    computerLabs () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    classRooms () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    theAtrium () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    oakDetails () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    oakVR () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    atriumDetails () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    theAtrium () {
      openURL('https://www.statesborowebdesigns.com/#kennedy_building,230.0,13.0,80.0,4.0')
    },
    venuesInfo () {
      openURL('https://darkvenues.netlify.com')
    },
    allRooms () {
      openURL('https://darkvenues.netlify.com')
    },
    rentalGuidelines () {
      openURL('https://clean-venues.netlify.com/Rental_Agreement_New.pdf')
    },
    feeSchedule () {
      openURL('https://clean-venues.netlify.com/Facility_Rental_Fee_Schedule_2019b.pdf')
    },
    capacityChart () {
      openURL('https://clean-venues.netlify.com/Capacity_Chart.pdf')
    }
  },

  data () {
    return {
      locale: this.$q.lang.isoName,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  padding-top: 5px;
  height: 90px;
}

.badges {
  height: 250px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.q-item__label {
  font-size: 1.25rem;
}

.my-menu-link {
  background: #7d6855;
  .q-item__label {
    color: white;
  }
  .q-icon {
    color: white;
  }
}

.text-brand-light {
  color: #a2aa33;
}
.text-brand-dark {
  color: #1e1e1e;
}
.bg-brand-light {
  background: #595358;
}
.bg-brand-dark {
  background: #1e1e1e; //#011627; #0D0B0D; #001627; #0E1116; #242331; #011627
}

@media only screen and (max-height: 1000px) {
  .badges {
    transform: scale(0.85) translateY(325px);
  }
  .bottom-logo {
    position: bottom;
    height: 100px;
  }
}

@media only screen and (max-height: 985px) {
  .badges {
    transform: scale(0.75) translateY(300px);
  }
  .bottom-logo {
    position: bottom;
    height: 75px;
  }
}

@media only screen and (max-height: 871px) {
  .badges {
    transform: scale(0.6) translateY(250px);
  }
}

@media only screen and (max-height: 785px) {
  .badges {
    transform: scale(0.5) translateY(200px);
  }
}

@media only screen and (max-height: 730px) {
  .badges {
    transform: scale(0.4) translateY(125px);
  }
}

@media only screen and (max-height: 675px) {
  .badges {
    transform: scale(0.37) translateY(80px);
  }
}

@media only screen and (max-height: 645px) {
  .badges {
    transform: scale(0.3) translateY(0px);
  }
}

@media only screen and (max-height: 610px) {
  .badges {
    transform: scale(0.25) translateY(-140px);
  }
}

@media only screen and (max-height: 565px) {
  .badges {
    visibility: hidden;
  }
}

@media only screen and (max-width: 473px) {
  .logo {
    transform: scale(0.75) translateX(-50px);
  }
}

//@media only screen and (max-width: 385px) {
//
//  .q-btn-dropdown {
//    visibility: hidden;
//  }
//}
</style>
