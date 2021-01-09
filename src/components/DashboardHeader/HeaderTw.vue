<script lang="ts">
/**
 * SIde bar for the dashboard
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { defineComponent } from "vue";
export default defineComponent({
  name: "header-tw",
  props: {
    notificationOpen: {
      type: Boolean
    },
    sidebarOpen: {
      type: Boolean
    },
    dropdownOpen: {
      type: Boolean
    }
  },
  setup() {
    const name = "name";
    return { name };
  }
});
</script>

<template>
  <header
    class="justify-between items-center  bg-white border-b-4 border-indigo-600 grid grid-cols-12"
  >
    <nav class="  col-span-12 flex-col bg-gray-900  flex-1 w-full sticky">
      <div class="hidden sm:block sm:ml-6">
        <div
          class="flex space-x-2 font-medium justify-items-center align-middle p-3"
        >
          <span
            v-if="!sidebarOpen"
            class="transition-all ease-in-out  duration-700 bg-gray-800 text-white px-2 py-2.5 rounded-md text-sm"
          >
            <svg
              @click="$emit('open-side-bar', !sidebarOpen)"
              class="block cursor-pointer h-6 w-6 ml-auto text-gray-700 hover:text-green-400 transition-colors ease-in-out duration-100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </span>
          <a
            href="#"
            class="transition-all ease-in-out duration-300 bg-gray-800 text-white px-2 py-2.5 rounded-md text-sm"
            >Dashboard</a
          >
          <a
            href="#"
            class="transition-all ease-in-out duration-300 text-gray-500 hover:bg-gray-800 hover:text-white px-3 py-2.5 rounded-md text-sm"
            >Team</a
          >
          <a
            href="#"
            class="transition-all ease-in-out duration-300 text-gray-500 hover:bg-gray-800 hover:text-white px-3 py-2.5 rounded-md text-sm"
            >Projects</a
          >
          <a
            href="#"
            class="transition-all ease-in-out duration-300 text-gray-500 hover:bg-gray-800 hover:text-white px-3 py-2.5 rounded-md text-sm"
            >Calendar</a
          >
          <div class="flex-1 flex text-blue-600">
            <span
              class="flex place-items-center hover:bg-gray-800 transition-all ease-in-out duration-300 rounded bg-transparent font-bold text-xs ml-auto text-green-500 mr-2 px-3"
            >
              <svg
                class="block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <span
              class="relative flex place-items-center hover:bg-gray-800 transition-all ease-in-out duration-300 rounded bg-transparent font-bold text-xs text-green-500 mr-2 px-3"
            >
              <span
                class="animate-ping absolute inset-0 h-full w-full rounded-full bg-green-900 opacity-25 hover:animate-none hover:opacity-0 transition-opacity ease-out duration-100"
              ></span>
              <svg
                class="block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 64 80"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                  d="M34.999 3.516c-0.828 0-1.5 0.671-1.5 1.499v23.987c0 0.828 0.671 1.499 1.5 1.499h23.986c0.828 0 1.499-0.671 1.499-1.499-0.016-14.069-11.416-25.47-25.485-25.486zM29.002 9.513c-14.075 0-25.486 11.41-25.486 25.485s11.411 25.486 25.486 25.486 25.485-11.41 25.485-25.486c0-0.828-0.671-1.499-1.499-1.499h-22.487v-22.487c0-0.828-0.671-1.499-1.499-1.499zM27.503 12.561v22.437c0 0.828 0.671 1.5 1.499 1.5h22.437c-0.803 11.803-10.606 20.972-22.437 20.987-12.42 0.005-22.491-10.059-22.496-22.479-0.004-11.843 9.179-21.661 20.997-22.445z"
                />
              </svg>
            </span>
            <span
              class="flex place-items-center hover:bg-gray-800 transition-all ease-in-out duration-300 rounded bg-transparent font-bold text-xs text-green-500 mr-2 px-3"
            >
              <svg
                class="block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </span>
            <span
              class="flex place-items-center hover:bg-gray-800 transition-all ease-in-out duration-300 rounded bg-transparent font-bold text-xs text-green-500 mr-2 px-3"
            >
              <svg
                class="block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </span>
            <span
              class="flex place-items-center hover:bg-gray-800 transition-all ease-in-out duration-300 rounded bg-transparent font-bold text-xs text-green-500 mr-2 px-3"
            >
              <svg
                class="block h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </span>
            <button
              @click="$emit('open-dropdown', !dropdownOpen)"
              class="hover:bg-gray-800 transition-all ease-in-out duration-300 rounded py-1 px-2 bg-transparent font-bold text-xs text-gray-400"
            >
              Hi, Ism
              <span
                class="bg-green-200 text-lg ml-1 py-1 px-3 rounded-sm text-green-400"
              >
                I
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class=" hidden sm:flex   bg-gray-50 py-2 px-2 font-normal text-xs text-gray-400"
      >
        <div class="text-sm text-gray-700 font-semibold px-4">
          Welcome back!
        </div>
        <div class="ml-auto flex space-x-2 px-4">
          <span
            class="cursor-pointer transition-all ease-in-out duration-300 hover:text-green-500 hover:bg-gray-200 py-1 px-2 rounded-sm"
            >Today</span
          >
          <span
            class="cursor-pointertransition-all ease-in-out duration-300 hover:text-green-500 hover:bg-gray-200 py-1 px-2 rounded-sm"
            >Month</span
          >
          <span
            class="cursor-pointer transition-all ease-in-out duration-300 hover:text-green-500 hover:bg-gray-200 py-1 px-2 rounded-sm"
            >Year</span
          >
          <span
            class="cursor-pointer transition-all ease-in-out duration-300 text-gray-400 bg-gray-200 py-1 rounded-sm px-2"
            >Today:
            <span class="text-green-500 ml-1"> Jan 5 </span>
          </span>
          <span
            class="cursor-pointer py-1 px-2 text-green-500 hover:bg-gray-200 rounded"
          >
            <svg
              class="block w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>

    <div class="flex items-center col-span-6 py-3 px-6">
      <button
        @click="$emit('open-side-bar', true)"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <input
          class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center justify-end col-span-6 py-3 px-6">
      <div class="relative">
        <button
          @click="$emit('open-notifications', true)"
          class="flex mx-4 text-gray-600 focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <div
          v-show="notificationOpen"
          @click="$emit('open-notifications', !notificationOpen)"
          class="fixed inset-0 h-full w-full z-10"
        ></div>

        <div
          v-show="notificationOpen"
          class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
          style="width: 20rem; "
        >
          <a
            href="#"
            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
              alt="avatar"
            />
            <p class="text-sm mx-2">
              <span class="font-bold" href="#">Sara Salah</span> replied on the
              <span class="font-bold text-indigo-400" href="#"
                >Upload Image</span
              >
              artical . 2m
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              alt="avatar"
            />
            <p class="text-sm mx-2">
              <span class="font-bold" href="#">Slick Net</span> start following
              you . 45m
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
              alt="avatar"
            />
            <p class="text-sm mx-2">
              <span class="font-bold" href="#">Jane Doe</span> Like Your reply
              on
              <span class="font-bold text-indigo-400" href="#"
                >Test with TDD</span
              >
              artical . 1h
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80"
              alt="avatar"
            />
            <p class="text-sm mx-2">
              <span class="font-bold" href="#">Abigail Bennett</span> start
              following you . 3h
            </p>
          </a>
        </div>
      </div>
      <div class="relative">
        <button
          @click="$emit('open-dropdown', !dropdownOpen)"
          class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
            alt="Your avatar"
          />
        </button>

        <div
          v-show="dropdownOpen"
          @click="$emit('open-dropdown', !dropdownOpen)"
          class="fixed inset-0 h-full w-full z-10"
        ></div>

        <div
          v-show="dropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
          style="display: none;"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Products</a
          >
          <a
            href="/login"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
