function Index() {
  const [name = '', setName] = useState<string>()
  const navigate = useNavigate()

  const go = () => navigate(`/hi/${encodeURIComponent(name)}`)

  return (
    <div>
      <p className="text-4xl">
        <IconFaSolidCampground className="inline-block" />
      </p>
      <p>
        <a
          rel="noreferrer"
          href="https://github.com/olrtg/venus"
          target="_blank"
        >
          Venus
        </a>
      </p>
      <p>
        <em className="text-sm opacity-75">
          Opinionated Vite starter template for modern React development.
        </em>
      </p>
      <div className="py-4" />
      <input
        id="input"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="What's your name?"
        aria-label="What's your name?"
        type="text"
        autoComplete="false"
        className="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
      />
      <label className="hidden" htmlFor="input">
        What&apos;s your name?
      </label>
      <div>
        <ComponentButton disabled={!name} onClick={go}>
          Go
        </ComponentButton>
      </div>
    </div>
  )
}

export default Index
