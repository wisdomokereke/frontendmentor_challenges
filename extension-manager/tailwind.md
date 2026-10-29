> > Tailwind colors

    <body>
    <h1>Color with fiferent shades</h1>
        <p class="text-violet-50">Tailwind</p>
        <p class="text-violet-100">Tailwind</p>
        <p class="text-violet-200">Tailwind</p>
        <p class="text-violet-300">Tailwind</p>
        <p class="text-violet-400">Tailwind</p>
        <p class="text-violet-500">Tailwind</p>
        <p class="text-violet-600">Tailwind</p>
        <p class="text-violet-700">Ta ilwind</p>
        <p class="text-violet-900">Tailwind</p>
        <hr>
        <!-- backgroud colors -->
        <h1>Background Colors</h1>
        <p class="bg-pink-600 text-white">Tailwind</p>
        <p class="bg-red-400 text-white">Tailwind</p>
        <p class="bg-blue-500 text-white">Tailwind</p>

        <br>
        <hr>
        <br>

        <h1>Text Decoration</h1>
        <p class="line-through">Tailwind</p>
        <p class="overline decoration-orange-400">Tailwind</p>
        <p class="underline">Tailwind</p>
        <p class="underline decoration-purple-400">Tailwind</p>

        <br>
        <hr>
        <br>

        <h1>4. Accent colors</h1>
        <input type="checkbox" name="Mastered" checked>
        <input type="checkbox" name="Mastered" class="accent-yellow-400"
            checked>
        <input type="checkbox" name="Mastered" class="accent-red-500"
            checked>
        <input type="checkbox" name="Mastered" class="accent-teal-400"
            checked>

        <br>
        <hr>
        <br>

        <h1>5. Arbitrary Colors</h1>
        <p class="text-[#ffd700]">Tailwind</p>
        <p class="text-[#c0c0c0]">Tailwind</p>
        <p class="text-[#50d71e]">Tailwind</p>
    </body>

> > tailwind margin, Spacing, padding, & space-between

<body>
        <h1>margin</h1>
        <div class="m-10 bg-yellow-100 text-green-700">Margin all round</div>
        <div class>
            <div class="mx-4 bg-teal-100">Margin from x-axis</div>
            <div class="mt-2 bg-green-200">Margin Top</div>
            <div class="mb-5 bg-blue-300">Margin Bottom</div>
            <div class="ml-10 bg-purple-400">Margin Left</div>
            <div class="mr-5 bg-indigo-500">Margin Right</div>
        </div>

        <br><hr><br>

        <h1 class="ml-[500px]">arbitrary spacing</h1>

        <br><hr><br>
        <h1>3. Padding</h1>
        <p class="p-10 bg-lime-100">padding all round</p>
        <p class="px-10 bg-lime-200">padding x-axis</p>
        <p class="py-10 bg-lime-300">padding y-axis</p>
        <p class="pt-10 bg-lime-400">padding top</p>
        <p class="pr-10 bg-lime-500">padding right</p>
        <p class="pl-10 bg-lime-600">padding left</p>
        <p class="pb-10 bg-lime-700">padding bottoom</p>
        <h1></h1>

        <br><hr><br>

        <h1>space between X</h1>

        <div class="flex space-x-4">
            <div class="p-3 bg-indigo-100">01</div>
            <div class="p-3 bg-indigo-200">02</div>
            <div class="p-3 bg-indigo-300">03</div>
        </div>

        <br><hr><br>

        <h1>Space Between Y</h1>
        <div class="flex flex-col  space-y-4">
            <div class="p-3 bg-indigo-100">01</div>
            <div class="p-3 bg-indigo-200">02</div>
            <div class="p-3 bg-indigo-300">03</div>
        </div>
        <br><hr><br>
    </body>

> > Typography

<body>
        <!-- Typography -->
        <h1 class="text-blue-900">1. Font-size</h1>
        <!-- <div class="bg-teal-100 p-7 mb-10">
            <p class="text-xs">Tailwind is Awesome</p>
            <p class="text-sm">Tailwind is Awesome</p>
            <p class="text-base">Tailwind is Awesome</p>
            <p class="text-lg">Tailwind is Awesome</p>
            <p class="text-xl">Tailwind is Awesome</p>
            <p class="text-2xl">Tailwind is Awesome</p>
            <p class="text-3xl">Tailwind is Awesome</p>
            <p class="text-4xl">Tailwind is Awesome</p>
            <p class="text-5xl">Tailwind is Awesome</p>
            <p class="text-6xl">Tailwind is Awesome</p>
            <p class="text-7xl">Tailwind is Awesome</p>
            <p class="text-8xl">Tailwind is Awesome</p>
            <p class="text-9xl">Tailwind is Awesome</p>
        </div> -->

        <br><hr><br>

        <h1 class="text-blue-900">2. Font-Family</h1>

        <div class="container bg-pink-200 p-10 mb-10">
            <p class="font-serif">tailwind is awesome</p>
            <p class="font-sans">tailwind is awesome</p>
            <p class="font-mono">tailwind is awesome</p>
        </div>

        <br><hr><br>

        <h1 class="text-blue-900">3. Font Weight</h1>

        <div class="container bg-orange-200 p-10 mb-10">
            <p class="font-light font-serif">tailwind is awesome</p>
            <p class>tailwind is awesome</p>
            <p class="font-medium font-sans">tailwind is awesome</p>
            <p class="font-semibold font-mono">tailwind is awesome</p>
            <p class="font-bold font-sans">tailwind is awesome</p>
        </div>

        <br><hr><br>

        <h1 class="text-blue-900">4. Letter Spacing</h1>

        <div class="container bg-gray-200 p-10 mb-10">
            <p class="tracking-tight">tailwind is awesome</p>
            <p class="tracking-normal">tailwind is awesome</p>
            <p class="tracking-wide">tailwind is awesome</p>
            <p class="tracking-widest">tailwind is awesome</p>
        </div>
    </body>

> > typography 1.2

<body>
        <h1>5. Text Alignment</h1>
        <div class="container bg-cyan-200 p-10 m-10">
            <p class="text-left">Tailwind is Awesome</p>
            <p class="text-center">Tailwind is Awesome</p>
            <p class="text-right">Tailwind is Awesome</p>
        </div>

        <br><hr><br>

        <h1>6. Text Decoration</h1>
        <div class="container bg-cyan-200 p-10 m-10">
            <p class="underline decoration-teal-400 decoration-4">Tailwind is
                Awesome</p>
            <p class="line-through decoration-2">Tailwind is Awesome</p>
            <p class="overline pt-4">Tailwind is Awesome</p>
        </div>

        <br><hr><br>

        <h1>7. Decoration Style</h1>
        <div class="container bg-cyan-200 p-10 m-10">
            <p class="underline decoration-solid">Tailwind is Awesome</p>
            <p class="underline decoration-double">Tailwind is Awesome</p>
            <p class="underline decoration-dotted">Tailwind is Awesome</p>
            <p class="underline decoration-dashed">Tailwind is Awesome</p>
            <p class="underline decoration-wavy">Tailwind is Awesome</p>
        </div>

        <br><hr><br>

        <h1>8. Decoration Offset</h1>
        <div class="container bg-red-200 p-10 m-10">
            <p class="underline underline-offset-1">Tailwind is Awesome</p>
            <p class="underline underline-offset-2">Tailwind is Awesome</p>
            <p class="underline underline-offset-3">Tailwind is Awesome</p>
            <p class="underline underline-offset-4">Tailwind is Awesome</p>
            <p class="underline underline-offset-5">Tailwind is Awesome</p>
        </div>

        <br><hr><br>

        <h1>9. Text Transform</h1>
        <div class="container bg-amber-200 p-10 m-10">
            <p class="normal-case">Tailwind is Awesome</p>
            <p class="uppercase">Tailwind is Awesome</p>
            <p class="lowercase">Tailwind is Awesome</p>
            <p class="capitalize">Tailwind is Awesome</p>
        </div>

        <br><hr><br>
    </body>

> Sizing

<body>
        <!-- Sizing -->
        <h1>1. Width</h1>
        <br>
        <p>a. Width all round</p>

        <div class="bg-teal-100 p-5">
            <div class="bg-red-600 w-0">0</div>
            <div class="bg-red-600 w-1">1</div>
            <div class="bg-red-600 w-1.5">1.5</div>
            <div class="bg-red-600 w-2">2</div>
            <div class="bg-red-600 w-3">3</div>
            <div class="bg-red-600 w-5">5</div>
            <div class="bg-red-600 w-6">6</div>
            <div class="bg-red-600 w-7">7</div>
            <div class="bg-red-600 w-8">8</div>
            <div class="bg-red-600 w-9">9</div>
            <div class="bg-red-600 w-10">10</div>
            <div class="bg-red-600 w-11">11</div>
            <div class="bg-red-600 w-12">12</div>
            <div class="bg-red-600 w-14">14</div>
            <div class="bg-red-600 w-16">16</div>
            <div class="bg-red-600 w-20">20</div>
            <div class="bg-red-600 w-24">24</div>
            <div class="bg-red-600 w-28">28</div>
            <div class="bg-red-600 w-32">32</div>
            <div class="bg-red-600 w-36">36</div>
            <div class="bg-red-600 w-64">64</div>
            <div class="bg-red-600 w-80">80</div>
            <div class="bg-red-600 w-96">96</div>
        </div>

        <br><hr><br>

        <!-- Percentages -->
        <h1 class="mt-5">2. Percentages</h1>
        <div class="bg-red-400 mb-5 p-5">
            <div class="bg-green-400 p-2 mb-4 w-1/2">1/2</div>
            <div class="bg-green-400 p-2 mb-4 w-1/3">1/3</div>
            <div class="bg-green-400 p-2 mb-4 w-1/4">1/4</div>
            <div class="bg-green-400 p-2 mb-4 w-2/4">2/4</div>
            <div class="bg-green-400 p-2 mb-4 w-3/4">3/4</div>
            <div class="bg-green-400 p-2 mb-4 w-1/5">1/5</div>
        </div>

        <br><hr><br>

        <h1 class="mt-5">3. Max-Width</h1>
        <div class="bg-yellow-100 p-10 mb-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            officia sed cupiditate. Libero ex deserunt quaerat minima ea ab
            expedita aliquid officia aperiam pariatur est aliquam cum dolorum,
            odio culpa eius! Facilis harum numquam sint dolorum ipsa, soluta,
            quas minima eaque veritatis doloremque labore accusamus veniam,
            dicta nemo itaque laudantium voluptates corporis aspernatur commodi
            in perspiciatis fugit voluptate. Quas dignissimos soluta neque, quis
            sint similique cumque! Id obcaecati harum quam labore fuga in
            tempora fugiat rem illum totam perspiciatis praesentium doloribus
            exercitationem doloremque, tempore libero impedit eum assumenda
            nulla molestiae consequuntur blanditiis cumque vitae saepe. Placeat
            doloribus neque enim autem!
        </div>

        <br><hr><br>

        <h1 class="mt-5">4. Viewport-Width</h1>
        <div class="bg-green-500 my-2 p-5 w-screen">Viewport Screens: Width
            100vh</div>
        <div class="bg-green-500 my-2 p-5 w-fill">Viewport Fill: Width
            100%</div>

        <br><hr><br>

        <h1>5. Arbitrary Width</h1>
        <div class="bg-teal-500 text-white my-2 w-[500px]">Arbitrary Width</div>

        <br><hr><br>

        <h1 class="mt-5">6. Height</h1>
        <div class="flex item-end mt-20 mb-10">
            <div class="bg-indigo-400 ml-5 h-24">Height 24</div>
            <div class="bg-indigo-400 ml-5 h-32">Height 32</div>
            <div class="bg-indigo-400 ml-5 h-40">Height 40</div>
            <div class="bg-indigo-400 ml-5 h-48">Height 48</div>
            <div class="bg-indigo-400 ml-5 h-64">Height 64</div>
            <div class="bg-indigo-400 ml-5 h-80">Height 80</div>
        </div>

        <br><hr><br>

        <h1 class="mt-5">7. Min-Height</h1>
        <div class="p-5 h-[400px] bg-green-300 mb-5">
            <div class="min-h-full bg-blue-300">Take Full height</div>
        </div>

        <br><hr><br>

        <h1>8. Max-Height</h1>

        <div class="h- bg-orange-300 mb-5" 150>
            <div class="m-20 bg-orange-500 h-48 max-h-full">Max Heigght
                Full</div>
        </div>

        <br><hr><br>

        <h1>9. Full Screen Height</h1>
        <div class="bg-pink-300 mb-4 h-screen">Full Screen</div>

        <br><hr><br>

        <h1>10. Width Auto</h1>
        <div class="bg-green-400 p-5 w-auto">Auto</div>

        <br><hr><br>

    </body>

> Position and Display

<body>

        <h1>1. Position</h1>

        <div class="relative w-1/2 h-40 bg-green-200">
            <p>Relative</p>
            <div
                class="absolute bottom-0 right-0 bg-teal-500 p-4">Absolute</div>
        </div>

        <div class="relative w-1/2 h-40 bg-green-200 mt-5">
            <p>Relative</p>
            <div
                class="absolute left-0 top-0 bg-teal-500 p-4">Absolute</div>
        </div>

        <div class="relative w-1/2 h-40 bg-green-200 mt-5">
            <p>Relative</p>
            <div
                class="absolute right-0 top-0 bg-teal-500 p-4">Absolute</div>
        </div>

        <div class="relative w-1/2 h-40 bg-green-200 mt-5">
            <p>Relative</p>
            <div
                class="absolute bottom-0 bg-teal-500 p-4">Absolute</div>
        </div>

        <br>

        <h1>2. Display</h1>
        <div class="container">
            <p class="block">Why did you leave?</p>
            <p class="hidden">Why did you leave?</p>
            <p class="inline-block">Say Cheese!</p>
        </div>

    </body>

> Background and Shadows and Gradients

<body>

        <!-- <h1>1. Backgrounds</h1> -->
        <!-- <div class="h-screen w-full bg-blue-500 bg-cover bg-no-repeat bg-center"
            style="background-image: url('../assets/bg-1.jpg')"></div> -->

        <!-- <h1>2. Shadows</h1> -->
        <!-- <div class="flex flex-wrap">
            <div class="w-[400px] mt-10 ml-4 p-3 shadow-md">Shadow Medium</div>
            <div class="w-[400px] mt-5 ml-4 p-3 shadow-lg">Shadow Large</div>
            <div class="w-[400px] mt-5 ml-4 p-3 shadow-xl">Shadow XL</div>
            <div
                class="w-[400px] mt-5 ml-4 p-3 shadow-2xl shadow-teal-600/70">Shadow
                2XL</div>
            <div
                class="w-[400px] mt-15 ml-4 p-3 shadow-inner shadow-red-500 rounded-2xl">Inner
            </div>
        </div> -->

        <!-- <h1>3. Gradients</h1> -->
        <div
            class="h-40 bg-gradient-to-r from-pink-100 to-red-500 text-center m-4 pt-14">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            doloremque optio incidunt eos non harum. Consectetur voluptatum
            minus corrupti tempora.
        </div>

        <div
            class="h-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 mt-10 text-center p-40">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            totam natus eius accusamus facilis animi doloribus rerum quasi
            corporis tempora magni corrupti minus eligendi delectus voluptatem
            magnam ipsum quam, aperiam nulla. Nostrum ex sapiente ab. Ab omnis
            voluptatem cupiditate exercitationem.
        </div>

</body>

> Borders

<body>
        <div class="border-2 border-green-100 m-12">
            <div class="w-96 m-3 p-5 border">Border All Around</div>
        </div>

        <script src="script.js"></script>

</body>
