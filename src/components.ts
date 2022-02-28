export interface ComponentResolverOption {
  /**
   * Prefix for resolving components name.
   * @default 'Component'
   */
  prefix: string
}

/**
 * Resolver for auto importing components
 * @param options
 */
export default function ComponentsResolver(
  options: ComponentResolverOption = { prefix: 'Component' },
) {
  const { prefix } = options

  return (name: string) => {
    if (name.startsWith(prefix)) {
      const componentName = name.slice(prefix.length)
      return `~/components/${componentName}`
    }
  }
}
