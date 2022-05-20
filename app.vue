<template>
  <div>
    <TabGroup class="mb-4" as="div">
      <TabList class="inline-flex gap-4 border mb-4">
        <Tab v-slot="{ selected }" as="template"><button class="p-4" :class="selected ? 'bg-gray-300' : 'bg-gray-100'">Tab 1</button></Tab>
        <Tab v-slot="{ selected }" as="template"><button class="p-4" :class="selected ? 'bg-gray-300' : 'bg-gray-100'">Tab 2</button></Tab>
      </TabList>
      <TabPanels class="border p-4">
        <TabPanel>
          This is the content of the first tab panel.
        </TabPanel>
        <TabPanel>
          This is the content of the second tab panel.
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <button class="p-4 bg-gray-100 mb-4" @click="isOpen = true">Open Dialog</button>
    <Dialog
        :open="isOpen"
        class="fixed inset-0 z-50 flex h-full w-full overflow-y-auto py-[10vh]"
        @close="isOpen = false"
    >
      <DialogOverlay class="fixed inset-0 bg-black opacity-50" />
      <div class="pointer-events-auto relative m-auto flex h-auto flex-col flex-wrap items-center overflow-y-auto rounded-3xl bg-white py-16 px-8 max-w-xl">
        <div class="m-auto w-full max-w-4xl">
          This is the content inside the Dialog modal
        </div>
        <button
            class="absolute right-7 top-7 rounded leading-none"
            aria-label="Close Modal"
            @click="isOpen = false"
        >
          &times;
        </button>
      </div>
    </Dialog>
    <Popover class="relative mb-4">
      <PopoverButton class="p-4 bg-gray-100">Open Popover</PopoverButton>
      <PopoverPanel class="absolute z-10 bg-white shadow-md p-4">
        This is the content inside the Popover Panel
      </PopoverPanel>
    </Popover>
    <Menu class="relative mb-4" as="div">
      <MenuButton class="p-4 bg-gray-100">Open Menu</MenuButton>
      <MenuItems as="ul" class="absolute z-10 bg-white shadow-md p-4">
        <MenuItem as="li">
          <a href="#">
            Link 1
          </a>
        </MenuItem>
        <MenuItem as="li">
          <a href="#">
            Link 2
          </a>
        </MenuItem>
        <MenuItem as="li">
          <a href="#">
            Link 3
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>
<script setup lang="ts">
import {
  Dialog,
  DialogOverlay, Menu, MenuButton, MenuItem, MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from "@headlessui/vue"

const isOpen = ref(false)

// generic global interaction tracking example
onMounted(() => {
  document.addEventListener('click', (e) => {
    const el = e.target
    if (!(el instanceof HTMLElement)) {
      return
    }
    if (el.matches('a, button')) {
      console.log('Tracked interaction:', el.textContent)
    }
  })
})

</script>
